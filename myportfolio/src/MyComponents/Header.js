import React from 'react'
import { Link } from 'react-router-dom';
import github from '../Assets/github.png';
import hackerrank from '../Assets/hackerrank.png';
import linkedin from '../Assets/linkedin.png';
import { Button } from 'react-bootstrap';
import { useState} from 'react';
import '../ComponentsCSS/HeaderStyles.css';
import {FaBars, FaTimes} from "react-icons/fa";




export const Header = () => {
    const [color, setColor] = useState(false);
    const [click,setClick] = useState(false);
    


    const handleClick = () => setClick(!click);

    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        }
        else {
            setColor(false);
        }
    }
    window.addEventListener("scroll", changeColor);


    return (
<div className={color? "header-main header-bg" : "header-main"}>
        <div className={click? "header active" : " header"}>
            <div className='nav-menu'>
            <ul className='nav-menu-routes'>
                <li>
                    <Link style={{textDecoration:"none"}} to='/' exact ><h5>Home</h5></Link>
                </li>
                <li>
                    <Link style={{textDecoration:"none"}} to='/skills' exact ><h5>Skills</h5></Link>
                </li>
                <li>
                    <Link style={{textDecoration:"none"}} to='/projects' exact ><h5>Projects</h5></Link>
                </li>
            </ul>
            </div>
            <div className='nav-menu-social'>
            <ul className='social-icons'>
                <li><Link to='https://www.linkedin.com/in/jyoti-8b7464242/'><img variant="link" id='linkedin' src={linkedin} alt="linkedin icon" /></Link></li>
                <li><Link to='https://github.com/Jyoti0902'><img variant="link" id='github' src={github} alt="github icon" /></Link></li>
                <li><Link to='https://www.hackerrank.com/jyotibrar0902?hr_r=1'><img variant="link" id='hackerrank' src={hackerrank} alt="hackerrank icon" /></Link></li>
                </ul>
                <div className='contact-btn'>
                 <Link to="/contact">
                    <Button variant="outline-light" size="lg"><span>Let's Connect</span></Button>{' '}
                </Link></div>
                
            </div>
        </div>
        <div className='hamburger' onClick={handleClick}>
            {click? (<FaTimes size={30} style={{color:"white"}}/>) : (<FaBars size={30} style={{color:"white"}}/>)}
                
            </div>
            
        </div>
    )
}
