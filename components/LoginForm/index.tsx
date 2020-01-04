import React, { useState, useRef } from 'react'
import styled from '@emotion/styled'
import Button from '../Button'
import Link from 'next/link'

const FormWrapper = styled.div`
  display: block;
  margin: auto;
  width: 50%;
  text-align: center;
`

const StyledForm = styled.form`
  margin-top: 100px;
  margin-bottom: 50px;
  padding: 0.5rem 3rem;
  background-color: white;
  border-radius: 30px;
`
const StyledInput = styled.input`
  margin-top: 30px;
  display: block;
  height: 48px;
  width: 100%;
  border: 0;
  &:focus {
    outline: 0;
  }
`
const StyledButton = styled(Button)`
  flex: 1;
  font-weight: 700;
  padding: 0.5rem 3rem;
  box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
  background-image: linear-gradient(101deg, #f95d68, #fa964d);
  background-origin: border-box;
  background-clip: border-box;
  box-shadow: 2px 1000px 1px #fff inset;
  &:hover {
    box-shadow: none;
    color: white;
  }
`
const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 10px;
`

const LoginButton = styled(StyledButton)`
  margin-right: 5px;
`
const RegisterButton = styled(StyledButton)`
  margin-left: 5px;
`

const PasswordFindLink = styled.a`
  text-decoration: underline;
  cursor: pointer;
  color: white;
`

const LoginForm: React.FC = props => {
  const inputRef = useRef<HTMLInputElement>(null)
  const onSubmit = (form: { email: string; password: string }): void => {
    console.log(form)
  }
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const { email, password } = form

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
      email: '',
      password: '',
    })
    if (!inputRef.current) {
      return
    }
    inputRef.current.focus()
  }

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          ref={inputRef}
          placeholder="이메일"
        />
        <StyledInput
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="비밀번호"
        />
        <ButtonWrapper>
          <LoginButton type="submit">로그인</LoginButton>
          <Link href="/auth/register">
            <RegisterButton>회원가입</RegisterButton>
          </Link>
        </ButtonWrapper>
      </StyledForm>

      <Link href="/auth/find">
        <PasswordFindLink>비밀번호 찾기</PasswordFindLink>
      </Link>
    </FormWrapper>
  )
}

export default LoginForm
