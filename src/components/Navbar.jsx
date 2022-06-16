import react, {Component} from 'react';
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon } from '@heroicons/react/solid';
import {Link} from 'react-router-dom';
import airbnb from '../imgs/Airbnb_koderx_deg.svg.png';

class Navbar extends Component{
    render(){
        return(
            <div className="d-flex bg-white" style={{flexFlow: "column"}}>
                <header className='z-50 grid grid-cols-3 shadow-lg shadow-gray-100 pt-6 pb-2 pl-2 md:px-10 w-100'>
                    <div className='flex relative items-center h-10 cursor-pointer my-auto'>
                        <Link to="/"><img src={airbnb} style={{width: "30%"}} /></Link>
                    </div>
                    <div className='flex items-center md:border-1 rounded-full py-2 pr-5'>
                        <input className='pl-5 flex-grow bg-transparent h-11 rounded-full outline-none text-sm text-gray-600 placeholder-gray-400 shadow-lg shadow-slate-500' type="text" placeholder='Start you search' />
                        <SearchIcon className='hidden md:inline-flex h-8 bg-blue-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
                    </div>
                    <div className='flex space-x-4 items-center justify-end'>
                        <p className='hidden md:inline m-0'>Become a host</p>
                        <GlobeAltIcon className='h-6 cursor-pointer'/>
                        <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                            <MenuIcon className='h-6'/>
                            <UserCircleIcon className='h-6'/>
                        </div>
                    </div>
                </header>
                <header className='d-flex nav pb-2 md:px-10 shadow-md shadow-slate-500 pl-10' style={{width: "100%"}}>
                    <div className='flex relative items-center p-1 justify-between' style={{width: "25%", left: "36%"}}>
                        <Link to="/create" className='outline-none' style={{textDecoration: "none"}}><div className='text-blue-400 cursor-pointer hover:text-gray-400' style={{fontSize: "14px", fontWeight: "600"}}>create</div></Link>
                        <Link to="/about" className='outline-none' style={{textDecoration: "none"}}><div className='text-blue-400 cursor-pointer hover:text-gray-400' style={{fontSize: "14px", fontWeight: "600"}}>about</div></Link>
                        <Link to="/help" className='outline-none' style={{textDecoration: "none"}}><div className='text-blue-400 cursor-pointer hover:text-gray-400' style={{fontSize: "14px", fontWeight: "600"}}>help</div></Link>
                    </div>
                </header>
            </div>
        );
    }
}
export default Navbar;