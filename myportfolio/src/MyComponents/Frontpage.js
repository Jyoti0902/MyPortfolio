import React from 'react'
import { Container, Button } from 'react-bootstrap'

import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../ComponentsCSS/FrontpgStyles.css';
import introimg from '../Assets/footer-bg.png';

export const Frontpage = () => {
    return (
        <>
            <section className='home text-light' id='home'>
                <div className='mask'>
                    <img className='intro-img' src={introimg} alt='intro-img' />
                </div>
                <Container className='content'>
                    <span className='tag-line'><h1>Welcome to my Portfolio</h1></span>
                    <div className='details'>
                        <h1>{`Hi I'm a `}<span className='wrap'>Web developer...</span></h1>
                        <p >I'm Jyoti a Web Developer specialising in React.JS.
                            Additionally,I have <br />experience in HTML & CSS.I create Websites based on your needs.</p>
                        <Link to="/contact">
                            <Button className='contactButton' onClick={() => console.log('connect')}>Let's connect <FaArrowRight size={15} /></Button>
                        </Link>
                    </div>
                </Container>
            </section>
        </>
    )
}
