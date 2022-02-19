import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled, { css } from 'styled-components'
import Button from './Button'
import { ContactDetailsTitle } from './typography'
import {
  BUTTON_VARIANTS,
  INPUT_VARIANTS
} from '../utils/constants'

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  > button {
    margin-top: 1.25rem;
    align-self: flex-start;
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
    }
  }
  .notEmpty {
    transform: translate(0, -${7 / 16}rem) scale(0.75);
  }
`

const InputLabel = styled.label`
  transform-origin: top left;
  transition: transform 0.4s var(--transition-function);

  ${({ variant }) =>
    variant !== INPUT_VARIANTS.SELECT &&
    css`
      position: absolute;
      left: var(--input-indentation);
      top: var(--input-top-gap);
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
  padding: ${9 / 16}rem var(--input-indentation);
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

const ErrorText = styled(motion.span)`
  display: inline-block;
  position: absolute;
  bottom: 0.25rem;
  font-size: 0.9rem;
  color: var(--primary-red);
`

const ErrorMessage = ({ children }) => (
  <ErrorText
    initial={{ opacity: 0, y: 4 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 4 }}>
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
        {...register(inputName, {
          ...errorConfig,
          onChange: (e) => setValue(e.target.value)
        })}
      />
      <AnimatePresence exitBeforeEnter>
        {errors[inputName] && (
          <ErrorMessage>
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
  return (
    <InputWrapper>
      <InputLabel htmlFor={textAreaName}>
        {`${labelText || textAreaName}${
          required ? '*' : ''
        }`}
      </InputLabel>
      <TextAreaField
        id={textAreaName}
        name={textAreaName}
        rows='5'
        {...register(textAreaName, errorConfig)}
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
    formState: { errors }
  } = useForm({ mode: 'onBlur' })

  const onSubmit = (data, e) => {
    console.log(data)
    e.target.reset() // reset after form submit
  }

  return (
    <FormStyles onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register}
        errors={errors}
        inputName='firma'
        type='text'
        labelText='Gabinet / Firma'
        required
        errorConfig={{
          required:
            'Podanie nazwy gabinetu lub firmy jest wymagane.'
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
        inputName='email'
        type='email'
        labelText='Twój e-mail'
        required
        errorConfig={{
          required: 'Podanie adresu jest wymagane.',
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
        inputName='telefon'
        type='tel'
        labelText='Numer telefonu'
        required
        errorConfig={{
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
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' }
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
