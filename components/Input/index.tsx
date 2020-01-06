import React from 'react'
import styled from '@emotion/styled'

const InputContainer = styled.div`
  display: inline-block;
  padding: 10px 20px;
  background: var(--gray-600);
  border-radius: 24px;
  outline: none;
  &:focus,
  &:active {
    outline: none;
  }
  input {
    border: 0;
    background: transparent;
    -webkit-appearance: none;
    font-size: 1.1rem;
  }
  .label {
    display: block;
    font-size: 0.85rem;
  }
`

interface InputInterface {
  label?: string | undefined
  placeholder?: string | undefined
  value?: string | undefined
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
        />
      </InputContainer>
    </>
  )
}

export default Input
