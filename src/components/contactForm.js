import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled, { css } from 'styled-components'
import Button from './Button'
import { ContactDetailsTitle } from './typography'
import {
  BUTTON_VARIANTS,
  FORM_MESSAGES,
  INPUT_VARIANTS
} from '../utils/constants'
import { encode } from '../utils'

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  > button {
    margin-top: 1.25rem;
    align-self: flex-start;
  }

  > span {
    bottom: -2rem;
  }
`

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 1.5rem;
  --input-indentation: 1rem;
  --input-top-gap: ${11 / 16}rem;
  &:focus-within {
    label {
      transform: translate(0, -${7 / 16}rem) scale(0.75);
      color: var(--off-black);
    }
  }
  .notEmpty {
    transform: translate(0, -${7 / 16}rem) scale(0.75);
    color: var(--off-black);
  }
`

const InputLabel = styled.label`
  transform-origin: top left;
  transition: color 0.4s var(--transition-function),
    transform 0.4s var(--transition-function);
  color: var(--paragraph-text);
  font-size: var(--smaller-paragraph-font-size);
  font-weight: 400;
  ${({ variant }) =>
    variant !== INPUT_VARIANTS.SELECT &&
    css`
      position: absolute;
      left: calc(var(--input-indentation) + 1px);
      top: calc(var(--input-top-gap) + 3px);
    `}
`

const InputField = styled.input`
  padding: 1rem var(--input-indentation) ${4 / 16}rem;
  border-radius: ${6 / 16}rem;
  border: 2px solid var(--input-border-gray);
  transition: 0.4s border-color var(--transition-function);
  color: var(--paragraph-text);
  font-size: var(--smaller-paragraph-font-size);
  line-height: 1;
  font-weight: 300;

  &:focus,
  &:focus-visible,
  &:active {
    border: 2px solid var(--primary-red);
    outline: none;
    font-weight: 600;
  }
`

const TextAreaField = styled.textarea`
  padding: 1rem var(--input-indentation) ${4 / 16}rem;
  border-radius: ${6 / 16}rem;
  border: 2px solid var(--input-border-gray);
  transition: 0.4s border-color var(--transition-function);
  color: var(--paragraph-text);
  font-size: var(--smaller-paragraph-font-size);
  line-height: 1;
  font-weight: 300;

  &:focus,
  &:focus-visible,
  &:active {
    border: 2px solid var(--primary-red);
    outline: none;
    font-weight: 600;
  }
`

const SelectField = styled.select`
  padding: ${9 / 16}rem calc(var(--input-indentation) - 5px);
  border-radius: ${6 / 16}rem;
  border: 2px solid var(--input-border-gray);
  transition: 0.4s border-color var(--transition-function);
  color: var(--paragraph-text);
  line-height: 1;
  font-size: var(--smaller-paragraph-font-size);
  font-weight: 400;

  &:focus,
  &:focus-visible,
  &:active {
    border: 2px solid var(--primary-red);
    outline: none;
    font-weight: 600;
  }
`

const ErrorText = styled(motion.span)`
  display: inline-block;
  position: absolute;
  bottom: 0.35rem;
  font-size: 0.8rem;
  left: var(--input-indentation);
  color: ${({ error }) =>
    error ? 'var(--primary-red)' : 'var(--off-black)'};
`

const ErrorMessage = ({ children, key, error = true }) => (
  <ErrorText
    key={key}
    error={error}
    role='alert'
    initial={{ opacity: 0, y: 4 }}
    animate={{
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }}
    exit={{ opacity: 0, transition: { duration: 0.15 } }}>
    {children}
  </ErrorText>
)

const Input = ({
  inputName,
  register,
  errors,
  errorConfig = {},
  required,
  type,
  labelText
}) => {
  const [value, setValue] = useState('')

  return (
    <InputWrapper>
      <InputLabel
        className={value !== '' && 'notEmpty'}
        htmlFor={inputName}>
        {`${labelText || inputName}${required ? '*' : ''}`}
      </InputLabel>
      <InputField
        id={inputName}
        name={inputName}
        type={type}
        aria-invalid={errors.name ? 'true' : 'false'}
        {...register(inputName, {
          ...errorConfig,
          onChange: (e) => setValue(e.target.value)
        })}
      />
      <AnimatePresence exitBeforeEnter>
        {errors[inputName] && (
          <ErrorMessage
            key={`${inputName}-${errors[inputName]?.message}`}>
            {errors[inputName].message}
          </ErrorMessage>
        )}
      </AnimatePresence>
    </InputWrapper>
  )
}

const TextArea = ({
  textAreaName,
  register,
  errors,
  errorConfig = {},
  required,
  labelText
}) => {
  const [value, setValue] = useState('')
  return (
    <InputWrapper>
      <InputLabel
        className={value !== '' && 'notEmpty'}
        htmlFor={textAreaName}>
        {`${labelText || textAreaName}${
          required ? '*' : ''
        }`}
      </InputLabel>
      <TextAreaField
        id={textAreaName}
        name={textAreaName}
        rows='5'
        {...register(textAreaName, {
          ...errorConfig,
          onChange: (e) => setValue(e.target.value)
        })}
      />
      <AnimatePresence exitBeforeEnter>
        {errors[textAreaName] && (
          <ErrorMessage>
            {errors[textAreaName].message}
          </ErrorMessage>
        )}
      </AnimatePresence>
    </InputWrapper>
  )
}

const Select = ({
  selectName,
  errors,
  register,
  errorConfig = {},
  required,
  labelText,
  options
}) => (
  <InputWrapper>
    <InputLabel
      className='sr-only'
      variant={INPUT_VARIANTS.SELECT}
      htmlFor={selectName}>
      {`${labelText || selectName}${required ? '*' : ''}`}
    </InputLabel>
    <SelectField
      id={selectName}
      name={selectName}
      required
      {...register(selectName, errorConfig)}>
      <option value='none' selected disabled hidden>
        Wybierz temat wiadomości…
      </option>
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </SelectField>
    <AnimatePresence exitBeforeEnter>
      {errors[selectName] && (
        <ErrorMessage>
          {errors[selectName].message}
        </ErrorMessage>
      )}
    </AnimatePresence>
  </InputWrapper>
)

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ mode: 'onBlur' })

  const [sendCounter, setSendCounter] = useState(0)
  const [formFeedbackMessage, setFormFeedbackMessage] =
    useState('')

  const onSubmit = (data) => {
    if (sendCounter >= 2) {
      setFormFeedbackMessage(FORM_MESSAGES.FAILURE)
      return 0
    }

    setSendCounter((old) => old + 1)

    console.log(data)

    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: encode({
        'form-name': 'kontakt',
        firma: data.firma,
        eMail: data.email,
        daneOsobowe: data.imieNazwisko,
        telefon: data.telefon,
        temat: data.temat,
        wiadomosc: data.wiadomosc
      })
    })
      .then(() => {
        setFormFeedbackMessage(FORM_MESSAGES.SUCCESS)
        setTimeout(() => {
          reset()
        }, [2500])
      })
      .catch(() => {
        setFormFeedbackMessage(FORM_MESSAGES.FAILURE)
        setTimeout(() => {
          reset()
        }, [2500])
      })
  }

  return (
    <FormStyles
      onSubmit={handleSubmit(onSubmit)}
      data-netlify
      method='post'
      name='kontakt'>
      <Input
        register={register}
        errors={errors}
        inputName='firma'
        type='text'
        labelText='Gabinet / Firma'
        required
        errorConfig={{
          minLength: {
            value: 4,
            message:
              'Wymagane podanie co najmniej 4 znaków.'
          },
          required:
            'Podanie nazwy gabinetu lub firmy jest wymagane.'
        }}
      />

      <Input
        register={register}
        errors={errors}
        inputName='email'
        type='email'
        labelText='Twój e-mail'
        required
        errorConfig={{
          required: 'Podanie adresu e-mail jest wymagane.',
          pattern: {
            value:
              /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: 'Nieprawidłowy adres e-mail'
          }
        }}
      />
      <Input
        register={register}
        errors={errors}
        inputName='imieNazwisko'
        type='text'
        labelText='Imię i nazwisko'
      />
      <Input
        register={register}
        errors={errors}
        inputName='telefon'
        type='tel'
        labelText='Numer telefonu'
        errorConfig={{
          minLength: {
            value: 9,
            message:
              'Wymagane podanie co najmniej 9 znaków.'
          },
          pattern: {
            value:
              /^(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)/i,
            message:
              'Nieprawidłowy nr tel. Wpisz np. 123123123, +48123123123'
          },
          required: 'Podanie numeru telefonu jest wymagane.'
        }}
      />
      <Select
        register={register}
        errors={errors}
        labelText='Temat wiadomości'
        selectName='temat'
        required
        errorConfig={{
          required:
            'Podanie tematu wiadomości jest wymagane.'
        }}
        options={[
          {
            value: 'Unit Nice One',
            label: 'Unit Nice One'
          },
          {
            value: 'Unit Nice Glass',
            label: 'Unit Nice Glass'
          },
          {
            value: 'Unit Nice Touch',
            label: 'Unit Nice Touch'
          },
          {
            value: 'Pytanie techniczne / Serwis',
            label: 'Pytanie techniczne / Serwis'
          }
        ]}
      />

      <TextArea
        register={register}
        errors={errors}
        textAreaName='wiadomosc'
        type='textarea'
        labelText='Treść wiadomości…'
        required
        errorConfig={{
          required: 'Wiadomość jest wymagana.'
        }}
      />

      <Button
        variant={BUTTON_VARIANTS.FILLED}
        type='submit'>
        Wyślij wiadomość
      </Button>
      <AnimatePresence exitBeforeEnter>
        <ErrorMessage
          key='feedback-msg'
          error={
            formFeedbackMessage === FORM_MESSAGES.FAILURE
          }>
          {formFeedbackMessage}
        </ErrorMessage>
      </AnimatePresence>
    </FormStyles>
  )
}

const ContactForm = ({ title }) => {
  return (
    <FormWrapper>
      <ContactDetailsTitle>{title}</ContactDetailsTitle>
      <Form />
    </FormWrapper>
  )
}

export default ContactForm
