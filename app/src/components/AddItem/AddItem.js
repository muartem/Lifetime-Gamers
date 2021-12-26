import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { createItem } from "../../redux/items/actions";
import { ReactComponent as Add } from '../../assets/media/Add.svg'
import { Title, Input, StyledItem } from './AddItem.style'


const AddItem = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('')
  const [editMode, toggleEditMode] = useState(false)

  const handleChange = (e) => {
    const { value } = e.target
    setValue(value)
  }

  const saveChange = () => {
    toggleEditMode(false)

    if(value.length > 0) {
      const newItem = {
        userId: 1,
        id: performance.now(),
        title: value,
        completed: false
      }

      dispatch(createItem(newItem))
    }
  }

  const handleKeyPress = ({key}) => {
    if (key === 'Enter'){
      saveChange()
    }
  }

  return (
    <StyledItem>
      <Add onClick={saveChange} />
      {editMode ?
        <Input
          onBlur={saveChange}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="Type game title"
          type="text" value={value}
        /> :
        <Title onClick={() => toggleEditMode(true)}>Add new game</Title>
      }
    </StyledItem>
  )
}

export default AddItem
