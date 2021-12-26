import React from 'react'
import AddItem from './AddItem'


export default {
  title: 'AddItem',
  component: AddItem,
  argTypes: {}
}

const Template = args => (
  <AddItem {...args} />
)

export const Default = Template.bind({})

Default.args = {}
