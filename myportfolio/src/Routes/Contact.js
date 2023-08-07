import React from 'react'
import { Header } from '../MyComponents/Header'
import {Footer} from '../MyComponents/Footer';
import { Frontpage2 } from '../MyComponents/Frontpage2';
import { Connectpg } from '../MyComponents/Connectpg';


export const Contact = () => {
  return (
    <div>
      <Header />
      <Frontpage2 title="CONTACT." text="Let's talk"/>
      <Connectpg/>
      <Footer/>
      </div>
  )
}
