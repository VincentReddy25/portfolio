import React from 'react'
import pic from '../assets/roronoa-zoro-from-one-piece-2024-pw-1366x768.jpg';

export default function
  () {
  return (
    <>
      <section id='About_professional' className='w-4/5 mx-auto my-32'>
        <header className='font-bold text-2xl px-4'>About Me</header>
        <div className='flex flex-col-reverse lg:grid grid-cols-2 text-justify'>
          <div className='grid gap-4 p-4'>
            <p>A keen front-end developer with Java expertise, capable of creating dynamic web applications. Eager to embrace new challenges, I am excited to contribute to innovative projects and deliver high-quality software solutions.</p>
            <p>Born on 25th October 2002 in Guntur, Andhra Pradesh.</p>
            <p>I completed my Under Graduation at Narasaraopeta Engineering College in Narasaraopet, Andhra Pradesh.</p>
            <p>I love to use my free time for playing games, watching anime, and sometimes reading books.</p>
            <p>I speak English fluently and Telugu is my mother tongue.</p>
          </div>
          <img src={pic} alt="Profile" className='p-4' />
        </div>

        <header className='font-bold text-2xl px-4 my-10'>Certified from CV Corp Training Institute</header>
        <div className=''>
          {/* Content for CV Corp Training Institute certification */}
        </div>

        <header className='font-bold text-2xl px-4 my-10'>Mentoring Juniors in College</header>
        <div className=''>
          {/* Content for mentoring juniors */}
        </div>

        <header className='font-bold text-2xl px-4 my-10'>Peer Learning</header>
        <div className=''>
          {/* Content for peer learning */}
        </div>

        <header className='font-bold text-2xl px-4 my-10'>Freelancing</header>
        <div className=''>
          {/* Content for freelancing */}
        </div>

        <header className='font-bold text-2xl px-4 my-10'>Rewards and Honors</header>
        <div className='grid grid-cols-2'>
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
          {/* Content for certifications */}
        </div>
      </section>
    </>
  )
}
