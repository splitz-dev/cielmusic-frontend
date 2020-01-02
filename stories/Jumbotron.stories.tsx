import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'

import Jumbotron from '../components/Jumbotron'

export default {
  title: 'Jumbotron', // 스토리북에서 보여질 그룹과 경로를 명시
  component: Jumbotron, // 어떤 컴포넌트를 문서화 할지 명시
  decorators: [withKnobs], // 애드온 적용
}

export const Jumbo = () => {
  // knobs 만들기
  const type = select(
    'Type',
    {
      Main: 'main',
      Gray: 'gray',
    },
    'gray',
  )
  return <Jumbotron type={type}>이 안에 있는 것이 Jumbotron 입니다</Jumbotron>
}
Jumbo.story = {
  name: 'Type pick',
}
