import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import {  BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import koder2 from './imgs/koder2.png';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Banner/>}/>
          <Route path="/create" element={<Create/>}/>
        </Routes>
        <footer className='bg-black h-40 d-flex px-16 items-center mt-5'>
          <img src={koder2} alt="" className='rounded-full' style={{width: "120px", height: "110px"}} />
          <h2 className='text-cyan-400 mr-96'>Copyright ©Coderx Development 2021</h2>
        </footer>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
