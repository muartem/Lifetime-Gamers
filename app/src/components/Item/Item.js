import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { completeItem, deleteItem, renameItem } from "../../redux/items/actions";
import { CheckBox, Title, Label, Input, StyledItem } from './Item.style'
import { ReactComponent as Delete } from '../../assets/media/Remove.svg'
import { Modal } from "../";
import PropTypes, { number, string } from "prop-types";


const Item = ({id, title, completed}) => {
  const dispatch = useDispatch();
  const [editMode, toggleEditMode] = useState(false)
  const [modal, showModal] = useState(false)
  const [value, setValue] = useState(title)


  const handleChange = (e) => {
    const { value } = e.target
    setValue(value)
  }

  const saveChange = () => {
    toggleEditMode(false)

    if(value !== title) {
      dispatch(renameItem(id, value))
    }
  }

  const handleKeyPress = ({key}) => {
    if (key === 'Enter'){
      saveChange()
    }
  }

  const confirmDelete = (answer) => {
    showModal(false)

    if (answer){
      dispatch(deleteItem(id))
    }
  }

  return (
    <StyledItem>
      <CheckBox type="checkbox"/>
      {editMode ?
        <Input
          onBlur={saveChange}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          type="text" value={value}
          placeholder="Type game title"
        /> :
        <Title onClick={() => toggleEditMode(true)}>{title}</Title>
      }
      <Label
        completed={completed}
        onClick={() => dispatch(completeItem(id, !completed))}
      >
        {completed ? "Complete" : "To play"}
      </Label>
      <Delete onClick={() => showModal(true)}/>
      {modal && <Modal confirmFn={confirmDelete}/>}
    </StyledItem>
  )
}

Item.propTypes = {
  id: PropTypes.oneOfType([string, number]).isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};


export default Item
