import styled from 'styled-components'
import is from 'styled-is';

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
    
    & > path{
      fill: #BA3409;
    }
  }
`

export const CheckBox = styled.div`
  width: 24px;
  height: 24px;
  margin: 8px 0;
	background: rgba(8, 160, 247, 0.06);
  border: 1px solid #08A0F7;
  border-radius: 3px;
  cursor: pointer;
`

export const Title = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: #26334A;
`

export const Input = styled.input`
  padding: 12px;
  background: #FFFFFF;
  border: 1px solid #08A0F7;
  box-sizing: border-box;
  border-radius: 8px;
  outline: none;
`

export const Label = styled.div`
  padding: 4px;
  height: 22px;
  border-radius: 4px;
  background: rgba(200, 152, 28, 0.57);
  
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: #4E4122;
  cursor: pointer;

  ${is('completed')`
    background: rgba(28, 188, 83, 0.57);
    color: #27653C;
  `};
`
