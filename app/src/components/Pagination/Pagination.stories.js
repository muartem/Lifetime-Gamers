import React from 'react'
import Pagination from './Pagination'


export default {
  title: 'Pagination',
  component: Pagination,
  argTypes: {}
}

const Template = args => (
  <Pagination {...args} />
)

export const Default = Template.bind({})

Default.args = {
  currantPage: 1,
  maxPage: 30,
  updatePage: () => {}
}
