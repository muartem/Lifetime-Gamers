import React from 'react'
import Board from './Board'
import { Provider } from "react-redux";
import store from "../../redux/store";


export default {
  title: 'Board',
  component: Board,
  argTypes: {}
}

const Template = args => (
  <Provider store={store}>
    <Board {...args} />
  </Provider>
)

export const Default = Template.bind({})

Default.args = {}
