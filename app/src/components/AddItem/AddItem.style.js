import styled from 'styled-components'

export const StyledItem = styled.header`
  display: grid;
	grid-template-columns: 24px  1fr 72px 24px;
	grid-gap: 44px;
  align-items: center;
  
  border: 1px solid #D8E1E9;
  box-sizing: border-box;
  box-shadow: 0 0 12px rgba(42, 72, 124, 0.4);
  border-radius: 10px;
  padding: 8px 36px;
  
  & > svg:hover {
    cursor: pointer;
  }
`

export const Title = styled.h3`
  margin: 8px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: #26334A;
  opacity: 0.5;
`

export const Input = styled.input`
  padding: 12px;
  background: #FFFFFF;
  border: 1px solid #08A0F7;
  box-sizing: border-box;
  border-radius: 8px;
  outline: none;
`
