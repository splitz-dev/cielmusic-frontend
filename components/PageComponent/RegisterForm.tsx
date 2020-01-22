import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import styled from '@emotion/styled'
import Button from '../Button'

const FormWrapper = styled.div`
  display: block;
  width: 500px;
  margin: 0 auto;
`

const StyledForm = styled.form`
  margin-top: 80px;
  margin-bottom: 50px;
  padding: 0.5rem 3rem;
  background-color: white;
  border-radius: 30px;
  padding-top: 20px;
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 10px;
  padding-right: 10px;
  .register-link {
    font-size: 15px;
    color: var(--gray-300);
    text-decoration: none;
  }
`

const Input = dynamic(() => import('../Input'))

const RegisterForm: React.FC = props => {
  const onSubmit = (form: { email: string; password: string }): void => {
    console.log(form)
  }
  const [form, setForm] = useState({
    nickname: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })

  const { nickname, email, password, passwordConfirm } = form

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (!form.email && !form.password) return
    onSubmit(form)
    setForm({
      nickname: '',
      email: '',
      password: '',
      passwordConfirm: '',
    })
  }

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <Input type="email" name="email" value={email} onChange={onChange} label="이메일" />
        <Input type="text" name="nickname" value={nickname} onChange={onChange} label="닉네임" />
        <Input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          label="비밀번호"
        />
        <Input
          type="password"
          name="password-confirm"
          value={passwordConfirm}
          onChange={onChange}
          label="비밀번호 확인"
        />
        <ButtonWrapper>
          <Button className="horizon" type="submit">
            회원가입
          </Button>
        </ButtonWrapper>
      </StyledForm>
    </FormWrapper>
  )
}

export default RegisterForm
