export default function Navbar() {
  return (
    <>
      <div className="flex md:justify-between md:flex-row flex-col items-center md:h-20 relative z-50 bg-white px-20 shadow-md">
        <h1 className="font-bold text-2xl">vincent.dev</h1>
        <ul className="flex gap-10 text-xl font-bold py-4">
          <li>
            <a href="#Home" className="hover:text-blue-600">Home</a>
          </li>
          <li>
            <a href="#Projects" className="hover:text-blue-600">Projects</a>
          </li>
          <li>
            <a href="#About" className="hover:text-blue-600">About</a>
          </li>
        </ul>
      </div>

    </>
  )
}