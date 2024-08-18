
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <>
      <Navbar />
      <section id='body' className='bg-gray-50'>
        <Home />
      </section>
    </>
  );  
}

export default App;
