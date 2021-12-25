import React from 'react'
import { Container, Logo, User, StyledHeader, Avatar } from './Header.style'
import logo from '../../assets/media/Playlist.png'
import avatar from '../../assets/media/Avatar.png'
import { ReactComponent as Bell } from '../../assets/media/Bell.svg'
import { ReactComponent as Settings } from '../../assets/media/Settings.svg'


const Header = () => (
  <StyledHeader>
    <Container>
      <Logo src={logo}/>
      <User>
        <Bell/>
        <Settings/>
        <Avatar src={avatar}/>
      </User>
    </Container>
  </StyledHeader>
)

export default Header
