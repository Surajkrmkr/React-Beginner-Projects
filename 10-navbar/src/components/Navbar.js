import React,{useState,useRef,useEffect} from 'react';
import logo from'./logo1.svg';
import {links,social} from './data.js';
import {FiAlignLeft} from "react-icons/fi";

function NavBar() {

  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const linkRef= useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  useEffect(()=>{
    const linkHeight = linkRef.current.getBoundingClientRect().height;
    
    if(isOpen){
      containerRef.current.style.height = `${linkHeight*links.length}px`;
      console.log(linkHeight*links.length);
    }else{
      containerRef.current.style.height = '0px';
    }
  },[isOpen]);

  return (<>
      <nav className="navbar">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button className="nav-btn" onClick={toggleNavbar}>
            <FiAlignLeft></FiAlignLeft>
          </button>
        </div>
        <div className='nav-container' ref={containerRef}>
          <ul className="nav-links">
            {
              links.map((link)=>{
                return <li key={link.id} className="link" ref={linkRef}>
                  <a href={link.url}>{link.text}</a>
                </li>
              })
            }
          </ul>
        </div>
        <div className="social-container">
          <ul className="social-links">
            {
              social.map((link)=>{
                return <li key={link.id} className="social-link">
                  <a href={link.url}>{link.icon}</a>
                </li>
              })
            }
          </ul>
        </div>
      </nav>
  </>);
}

export default NavBar;