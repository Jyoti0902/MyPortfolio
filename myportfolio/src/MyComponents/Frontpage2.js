import '../ComponentsCSS/FrontpgStyles2.css'
import frontimg2 from '../Assets/frontimg2.png'
import React from 'react'
import { render } from '@testing-library/react'

export const Frontpage2 = (props) => {
  return (
    <div className='front-page'>
      <div className='frontpg2'>
          <img className='frontimg2' src={frontimg2} alt='frontimg2' />
        </div>
      <div className='content'>
        
        <div className='headings'>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </div>
        </div>

    </div>
  )
}
