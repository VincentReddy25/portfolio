import React, { useState } from 'react';
import About_personal from './About_personal';
import About_professional from './About_professional';

export default function About() {
  const [isProfessional, setIsProfessional] = useState(true);

  return (
    <>
      <div className='flex justify-center'>
        <div className='grid grid-cols-2 gap-4 mt-10 px-4 py-2 bg-gray-500 rounded'>
          <button
            className={`px-10 py-1 rounded ${isProfessional ? 'bg-gray-300' : 'bg-white'}`}
            onClick={() => setIsProfessional(true)}
          >
            Professional
          </button>
          <button
            className={`px-10 py-1 rounded ${!isProfessional ? 'bg-gray-300' : 'bg-white'}`}
            onClick={() => setIsProfessional(false)}
          >
            Personal
          </button>
        </div>
      </div>

      <div id='about'>
        {isProfessional ? <About_professional /> : <About_personal />}
      </div>
    </>
  );
}
