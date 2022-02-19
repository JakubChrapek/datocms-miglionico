import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import ReactSelect from 'react-select'
import styled from 'styled-components'
import { ContactDetailsTitle } from './typography'

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
`

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 1.5rem;
`

const InputLabel = styled.label``

const InputField = styled.input``

const TextAreaField = styled.textarea``

const SelectField = styled.select``

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
  return (
    <InputWrapper>
      <InputLabel htmlFor={inputName}>
        {`${labelText || inputName}${required ? '*' : ''}`}
      </InputLabel>
      <InputField
        id={inputName}
        name={inputName}
        type={type}
        {...register(inputName, errorConfig)}
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
    <InputLabel htmlFor={selectName}>
      {`${labelText || selectName}${required ? '*' : ''}`}
    </InputLabel>
    <SelectField
      id={selectName}
      name={selectName}
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

      <input type='submit' />
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
