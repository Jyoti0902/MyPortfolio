import React from 'react'
import '../ComponentsCSS/FooterStyles.css';
import footerback from '../Assets/footerback.png';
import { Link } from 'react-router-dom';
import { FaGithub, FaHackerrank, FaLinkedinIn } from "react-icons/fa";
import github from '../Assets/github.png';
import hackerrank from '../Assets/hackerrank.png';
import linkedin from '../Assets/linkedin.png';


export const Footer = () => {
  return (
    <div className='footer'>
      <section className='footer-bg-1st'>
        <div className='footer-background'>
          <img className='footer-img' src={footerback} alt='footerimg' />

          <div className='content-upper text-center'>
            <div class="col-md-12 col-sm-12">
              <h2 class="plan-title">
                My<span>Portfolio</span>
              </h2>
            </div>
            <div class="row justify-content-center">
              <ul class="foot-menu text">
                <li class="foot-menu-item">
                  <Link style={{textDecoration:"none"}} to="/" class="text-black">
                    <h5>HOME</h5>
                  </Link>
                </li><li class="foot-menu-item">
                  <div class="rhombus"></div>
                  <Link style={{textDecoration:"none"}}to="/skills" class="text-black">
                    <h5>MY SKILLS</h5>
                  </Link>
                </li><li class="foot-menu-item">
                  <div class="rhombus"></div>
                  <Link style={{textDecoration:"none"}} to="/projects" class="text-black">
                    <h5>MY PROJECTS</h5>
                  </Link>
                </li><li class="foot-menu-item">
                  <div class="rhombus"></div>
                  <Link style={{textDecoration:"none"}} to="contact" class="text-black">
                    <h5>CONTACT ME</h5>
                  </Link>
                </li></ul>
            </div>


            <div class="route-row">
              <p>
                Copyright &copy; 2023
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='footer-bg-2st'>
        <div className='content-lower' id='content'>
        <ul className='social-icons'>
                <li><Link to='https://www.linkedin.com/in/jyoti-8b7464242/'><img variant="link" id='linkedin1' src={linkedin} alt="linkedin icon" /></Link></li>
                <li><Link to='https://github.com/Jyoti0902'><img variant="link" id='github1' src={github} alt="github icon" /></Link></li>
                <li><Link to='https://www.hackerrank.com/jyotibrar0902?hr_r=1'><img variant="link" id='hackerrank1' src={hackerrank} alt="hackerrank icon" /></Link></li>
                </ul>
                <div className='contact-btn'>
        </div>
</div>
      </section>
    </div>
  )
}
