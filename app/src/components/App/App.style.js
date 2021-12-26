import styled from 'styled-components'

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  padding-bottom: 70px;
`

export const Container = styled.div`
	display: flex;
  justify-content: space-between;
  margin: 0 auto;
	width: 80%;
	gap: 25px;
	flex-direction: column;
  
  @media (max-width: 992px) {
    padding: 0 5px;
    width: 100%;
  }
`

export const Title = styled.h1`
  text-align: start;
  font-style: normal;
  font-weight: 900;
  font-size: 42px;
  line-height: 49px;
  letter-spacing: 0.03em;
`
