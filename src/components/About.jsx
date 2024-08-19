import React from 'react'
import pic from '../assets/roronoa-zoro-from-one-piece-2024-pw-1366x768.jpg'

export default function About() {
  return (
    <>
      <section id='About' className='w-4/5 mx-auto py-32'> 
        <header className='font-bold text-2xl px-4'>About Me</header>
        <div className='grid grid-cols-2 text-justify'>
          <div className='grid gap-4 p-4'>
            <p>A keen front-end developer with Java expertise, capable of creating dynamic web applications. Eager to embrace new challenges, I am excited to contribute to innovative projects and deliver high-quality software solutions.</p>
            <p>Born on 25th oct, 2002 in Guntur, Andhra Pradesh.</p>
            <p>I completed my Under Graduation at Narasaraopeta Engineering College in Narasaraopet, Andhra Pradesh.</p>
            <p>I love to use my free time for playing games, watching anime and sometimes reading books.</p>
            <p>I speak English fluently and where Telugu is my mother toungh.</p>
          </div>
          <img src={pic} alt="pic" className='p-4' />
        </div>

        <header className='font-bold text-2xl px-4 my-10'>Certified from CV Corp Traning Institute</header>
        <div className=''>
        </div>

        <header className='font-bold text-2xl px-4 my-10'>Mentoring Juniors in College</header>
        <div className=''>
        </div>

        <header className='font-bold text-2xl px-4 my-10'>Peer Learning</header>
        <div className=''>
        </div>

        <header className='font-bold text-2xl px-4 my-10'>Rewards and Honors</header>
        <div className='grid grid-col-2'>
          <div className='flex'>
            <img src="" alt="" />
            <p></p>
          </div>
          <div className='flex'>
            <img src="" alt="" />
            <p></p>
          </div>
        </div>

        <header className='font-bold text-2xl px-4 my-10'>Certifications</header>
        <div className=''>
        </div>

      </section>
    </>
  )
}
