import React, { useState } from 'react'
import { Aa, IconBar, Li, Nav, NavLinks, No, Section, Title, Wrapper } from '../styledComponents/Navbar.styled'

const NavBar = () => {
  const [menu,extendMenu] = useState(false);
  
  function toggleMenu() {
    extendMenu((curr)=>{
      return !curr;
    })
  }


  return (
    <div>
      <Section>
        <Nav>
            <Aa href="index.html">LOGO</Aa>
            <No>+91-9870301533</No>
            <NavLinks menu={menu}>
                <IconBar className="fa fa-times" onClick={toggleMenu}></IconBar>
            <ul>
                <Li><Aa href="#">Diwali Sale</Aa></Li>
                <Li><Aa href="#">International Trips</Aa></Li>
                <Li><Aa href="#">Blogs</Aa></Li>
                <Li><Aa href="#">About Us</Aa></Li>
            </ul>
        </NavLinks>
        <IconBar className="fa fa-bars" onClick={toggleMenu}></IconBar>
        </Nav>
    </Section>
    </div>
  )
}

export default NavBar
