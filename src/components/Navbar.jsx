
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home'
import About from './About'

export default function Navbar() {
  return (
    <>
      <div className="flex md:justify-between md:flex-row flex-col items-center md:h-20 z-50 bg-white px-20 shadow-md">
        <h1 className="font-bold text-2xl">vincent.dev</h1>
        <ul className="flex gap-10 text-xl font-bold py-4">
          <li>
            <Link to="Home" className="hover:text-blue-600">Home</Link>
          </li>
          <li>
            <Link to="About" className="hover:text-blue-600">About</Link>
          </li>
        </ul>
      </div>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>

    </>
  )
}