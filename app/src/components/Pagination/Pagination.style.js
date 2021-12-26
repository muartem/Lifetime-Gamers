import styled from 'styled-components'
import is from 'styled-is';

export const StyledPagination = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
	display: flex;
  align-items: center;
  justify-content: space-between;
	width: 80%;
  
  @media (max-width: 992px) {
    padding: 0 5px;
    width: 100%;
  }
`

export const Page = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  color: rgba(38, 51, 74, 0.6);
`

export const Controls = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
	flex-grow: 0;
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
  
  ${is('disabled')`
    background: rgba(8, 160, 247, 0.4);
    cursor: not-allowed;
  `};
`
