import React from 'react'
import PropTypes from "prop-types";
import { BackDrop, StyledModal, Button, Title, ButtonGroup, Close } from "./Modal.style";
import { ReactComponent as CloseSvg } from '../../assets/media/Close.svg'


const Modal = ({confirmFn}) => {
  const handleClick = (answer) => (event) => {
      event.stopPropagation()
      confirmFn(answer)
  }

  return (
    <BackDrop onClick={handleClick(false)}>
      <StyledModal>
        <Close onClick={handleClick(false)}>
          <CloseSvg/>
        </Close>
        <Title>Are you sure you want to delete this item?</Title>
        <ButtonGroup>
          <Button danger onClick={handleClick(true)}>Yes, delete</Button>
          <Button onClick={handleClick(false)}>Cancel</Button>
        </ButtonGroup>
      </StyledModal>
    </BackDrop>
  )
}

Modal.propTypes = {
  confirmFn: PropTypes.func.isRequired
};


export default Modal
