import React from 'react'
import styled from '@emotion/styled'

const InputContainer = styled.div`
  display: inline-block;
  padding: 10px 30px;
  width: 100%;
  border: 1.5px solid transparent;
  background: var(--gray-600);
  border-radius: 50px;
  outline: none;
  line-height: 1.6;
  margin-bottom: 12px;
  transition: all 0.5s ease;
  &:active,
  &:focus,
  &:hover {
    border: 1.5px solid var(--red);
  }
  input {
    width: 100%;
    border: 0;
    background: transparent;
    -webkit-appearance: none;
    font-size: 1rem;
    outline: none;
    padding: 5px 0;
  }
  .label {
    display: block;
    font-size: 0.8rem;
    color: var(--gray-300);
  }
`

interface InputInterface extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string | undefined
}

const Input: React.FC<InputInterface> = props => {
  return (
    <>
      <InputContainer>
        {(() => {
          if (props.hasOwnProperty('label')) {
            return <span className="label">{props.label}</span>
          }
        })()}
        <input
          placeholder={props.hasOwnProperty('placeholder') ? props.placeholder : undefined}
          value={props.hasOwnProperty('value') ? props.value : undefined}
          name={props.hasOwnProperty('name') ? props.name : undefined}
          type={props.hasOwnProperty('type') ? props.type : undefined}
          onChange={props.hasOwnProperty('onChange') ? props.onChange : undefined}
          {...props}
        />
      </InputContainer>
    </>
  )
}

export default Input
