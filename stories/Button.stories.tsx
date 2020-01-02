import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '../components/Button'

storiesOf('Button', module).add('Default state', () => {
  return <Button>안녕</Button>
})
