import React, { useState, useRef } from 'react'
import dynamic from 'next/dynamic'
import styled from '@emotion/styled'
import Button from '../../Button'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { loginAsync } from '../../../modules/login'
import { RootState } from '../../../modules'

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

const StyledButton = styled(Button)`
  font-size: 18px;
  font-weight: 700;
  box-shadow: 0 2px 4px 0 rgba(157, 96, 212, 0.5);
  background-image: linear-gradient(101deg, #f95d68, #fa964d);
  color: #fff;
  @media (max-width: 1000px) {
    padding: 0.6rem 1.2rem;
  }
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

const PasswordFindLink = styled.a`
  text-decoration: underline;
  cursor: pointer;
  color: white;
`

const Input = dynamic(() => import('../../Input'))

const LoginForm: React.FC = props => {
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector((state: RootState) => state.login.login)

  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const onSubmit = (form: { email: string; password: string }): void => {
    dispatch(loginAsync.request({ email, password }))
  }
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
  }

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <Input type="email" name="email" value={email} onChange={onChange} label="이메일" />
        <Input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          label="비밀번호"
        />
        <ButtonWrapper>
          <StyledButton type="submit">로그인</StyledButton>
          <Link href="/auth/register" passHref>
            <a className="register-link">회원가입</a>
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
