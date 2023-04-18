import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import {  BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import koder2 from './imgs/koder2.png';
import About from './components/About';
import Help from './components/Help';

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
            <Route path="/help" element={<Help/>} />
          </Routes>
        </div>
        <footer className='bg-black h-22 w-100 d-flex px-10 pr-20 mt-5 static' style={{bottom: "0", flexFlow: "column"}}>
          <div className='d-flex items-center w-100 py-4'>
            <img src={koder2} alt="" className='rounded-full' style={{width: "120px", height: "110px"}} />
            <div className='sticky' style={{left: "30%"}}>
              <h2 className='text-cyan-400' >Copyright ©Coderx Development 2022</h2>
              <div className='w-100 d-flex px-5 justify-between mt-3'>
                <span className='text-white'>• Develop Web</span>
                <span className='text-white'>• Code Web</span>
                <span className='text-white'>• Programing</span>
                <span className='text-white'>• data scientify</span>
              </div>           
            </div>
          </div>
          
        </footer>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
