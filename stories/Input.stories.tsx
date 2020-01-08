import React from 'react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'

import Input from '../components/Input'

export default {
  title: 'Input', // 스토리북에서 보여질 그룹과 경로를 명시
  component: Input, // 어떤 컴포넌트를 문서화 할지 명시
  decorators: [withKnobs], // 애드온 적용
}

export const Default = () => {
  const Type = select('Input Type', ['text', 'email', 'password', 'phone'], 'text')
  const Placeholder = text('Input Placeholder', 'This is Placeholder')
  const Value = text('Input Value', '')
  return <Input type={Type} placeholder={Placeholder} value={Value} />
}
Default.story = {
  name: 'Default state',
}

export const withLabel = () => {
  const Type = select('Input Type', ['text', 'email', 'password', 'phone'], 'text')
  const Placeholder = text('Input Placeholder', 'This is Placeholder')
  const Value = text('Input Value', '')
  const Label = text('Form Label', 'Hello everyone 😄')
  return <Input placeholder={Placeholder} value={Value} label={Label} type={Type} />
}
withLabel.story = {
  name: 'with Label',
}
