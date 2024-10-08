import React from 'react'
import pic from '../assets/roronoa-zoro-from-one-piece-2024-pw-1366x768.jpg'

export default function Home() {
    return (
        <>
            <section id='Home' className='bg-gray-100 py-32'>
                <div className='flex justify-center items-center flex-col-reverse md:flex-row gap-10'>
                    <div className='grid gap-10'>
                        <h1 className='font-extrabold md:text-6xl text-3xl'>Java Full Stack <br /> Developer</h1>
                        <p className='text-gray-600 md:text-xl'>Hi, I'm Vincent Reddy. <br /> A passionate Java Full Stack Developer based in India. 📍</p>
                        <div className='flex items-center gap-4'>
                            <a href="" className='hover:text-blue-600'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-brand-linkedin"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>
                            </a>
                            <a href="" className='hover:text-blue-600'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                            </a>
                            <a href={pic} target='_blank' className='px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full'>Resume</a> 
                            {/* download arrow code: &#8595; */}
                        </div>
                    </div>
                    <img 
                        className='border-4 border-black rounded-full size-52 md:size-80 object-cover' 
                        src={pic} 
                        alt="my profile photo" />
                </div>

                <div className='grid place-items-center'>
                    <span className='m-4 underline'>Tech Stack</span>
                    <ul className='grid grid-cols-2 sm:grid-cols-3 gap-8 place-items-center md:flex md:justify-center md:items-center'>
                        <li>
                            <img src="https://skillicons.dev/icons?i=html,css" />
                        </li>
                        <li>
                            <img src="https://skillicons.dev/icons?i=js,react" />
                        </li>
                        <li>
                            <img src="https://skillicons.dev/icons?i=tailwind,git" />
                        </li>
                        <li>
                            <img src="https://skillicons.dev/icons?i=mysql,postgres" />
                        </li>
                        <li>
                            <img src="https://skillicons.dev/icons?i=java,spring" />
                        </li>
                    </ul>
                </div>

            </section>

            <section id='Projects' className='bg-white w-4/5 mx-auto my-4'>
                <h1 className='text-center text-3xl font-bold my-4 underline'>Projects</h1>
                <div className='grid gap-4 border-2'>
                    <div className='flex md:flex-row flex-col items-center md:items-start gap-4 p-4'>
                        <img src={pic} alt="project image" className='w-1/2 object-cover' />
                        <div>
                            <h1>title</h1>
                            <p>tech stack</p>
                            <p>description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima repellat labore voluptas quasi impedit eveniet tenetur ipsa, officiis temporibus commodi.</p>
                        </div>
                    </div>
                   
                </div>
            </section>
        
        </>
    )
}
