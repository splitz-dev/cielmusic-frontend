import React from 'react'
import styled from '@emotion/styled'

const Button = styled.button`
  padding: 13px 25px;
  border: 0;
  background: var(--gray-500);
  color: #333;
  border-radius: 30px;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;

  &.horizon {
    background: var(--horizon);
    color: #fff;
  }
`

export default Button
