import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`

export const Container = styled.div`
	display: flex;
  align-items: center;
  justify-content: space-between;
	width: 80%;
  padding: 24px 0;
  
  @media (max-width: 992px) {
    padding: 24px 5px;
    width: 100%;
  }
`

export const Logo = styled.img`
  height: 32px;
  margin: 10px 0;
  cursor: pointer;
`

export const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
	flex-grow: 0;
	gap: 30px;
	
	& > svg{
	  height: 20px;
	  cursor: pointer;
	}
`

export const Avatar = styled.img`
	width: 52px;
  height: 52px;
  border-radius: 50px;
  cursor: pointer;
`
