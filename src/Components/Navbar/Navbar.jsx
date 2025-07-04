import React, { useRef, useState } from 'react'
import "../Navbar/Navbar.css"
import underline from "../../assets/nav_underline.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const menuRef = useRef();

  const openMenu = ()=>{
    menuRef.current.style.right = "0"
  }

  const closeMenu = ()=>{
    menuRef.current.style.right = "-350px"
  }
  return (
    <div className='navbar'>
      <h1 className='logo'>Am<span>@@</span>n</h1>
      <img src={menu_open} alt="" className='nav-mob-open' onClick={openMenu}/>
      <ul className='nav-menu' ref={menuRef}>
        <img src={menu_close} alt="" className='nav-mob-close' onClick={closeMenu}/>
        <li><AnchorLink className="anchor-link" href="#home"><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} /> : <></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={() => setMenu("about")}>About me</p></AnchorLink>{menu === "about" ? <img src={underline} /> : <></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={() => setMenu("services")}>Services</p></AnchorLink>{menu === "services" ? <img src={underline} /> : <></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={() => setMenu("work")}>Portfolio</p></AnchorLink>{menu === "work" ? <img src={underline} /> : <></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} /> : <></>}</li>
      </ul>
      <div className='nav-connect'>
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Contact me</AnchorLink>
        
      </div>
    </div>
  )
}

export default Navbar