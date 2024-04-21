import React from 'react'
import {logo} from '../assets'

const Hero = () => {
  return (
    <header className='justify-center w-full flex items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-12 pt-3'>
            <img src={logo} alt='summerz_logo' className='w-14 object-contain' />
            <h1 style={{fontFamily:'cursive', color: 'purple',fontWeight: 'normal',  fontSize: '28px',lineHeight: '42px',textShadow: '0 0 3px white, 0 3px #777'}}>
            SummerzR</h1>
            <button type='button'
            onClick={()=>window.open('https://github.com/Rakshit-gen')}
            className='black_btn'
            >
            Github
            </button>

        </nav>
        <h1 className='head_text'>Summarize your Articles with <br className='max-md:hidden' />
            <span className='orange_gradient' href="https://openai.com/">OpenAI GPT-4</span>
        </h1>
        <h2 className='desc' style={{color:'wheat'}}>Simplify and Speedify your reading with Summarz.
        An open source platform for article summary and analysis.
        Transform complex and lengthy articles into consise and clear summaries</h2>
    </header>
  )
}

export default Hero
