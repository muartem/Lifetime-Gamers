import styled from 'styled-components'
import is from 'styled-is';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  
  height: 100vh;
  width: 100vw;
  
  z-index: 1000;
  display: flex;
  
  justify-content: center;
  align-items: center;
  
  background-color: rgba(0,0,0,0.3);
`
export const StyledModal = styled.div`
  width: 306px;
  z-index: 1100;
  background: #FFFFFF;
  box-shadow: 0 30px 60px rgba(32, 56, 85, 0.15);
  border-radius: 8px;
  padding: 36px;
  justify-content: center;
  
  display: flex;
  flex-direction: column;
  gap: 48px;
`

export const Close = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  display: flex;
  justify-content: right;
  transform: translate(20px, -20px);
  cursor: pointer;
`

export const Title = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 19px;
  color: #26334A;
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 24px;
`

export const Button = styled.button`
  text-align: center;
  border: none;
  padding: 12px 16px;
  height: 43px;
  background: #08A0F7;
  border-radius: 8px;
  
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  cursor: pointer;
  
  ${is('danger')`
    background: #BA3409;
  `};
`
