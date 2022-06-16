import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import {  BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import koder2 from './imgs/koder2.png';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className='main'>
          <Routes>
            <Route path="/" element={<Banner/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </div>
        <footer className='bg-black h-22 w-100 d-flex px-10 pr-20 items-center mt-5 static' style={{bottom: "0"}}>
          <img src={koder2} alt="" className='rounded-full' style={{width: "120px", height: "110px"}} />
          <h2 className='text-cyan-400 sticky' style={{left: "30%"}}>Copyright ©Coderx Development 2021</h2>
        </footer>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
