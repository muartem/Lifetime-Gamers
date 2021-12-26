import styled from 'styled-components'

export const StyledBoard = styled.main`
  min-height: 300px;
  
  background: #FFFFFF;
  box-shadow: 0 30px 60px rgba(32, 56, 85, 0.15);
  border-radius: 10px;
  padding: 12px 124px 45px 36px;
`

export const Header = styled.header`
	display: grid;
	grid-template-columns: 24px  1fr 72px 24px;
	grid-gap: 44px;
  align-items: center;
  
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  
  color: rgba(38, 51, 74, 0.6);
  padding: 24px 36px;
`

export const List = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 16px;
`


