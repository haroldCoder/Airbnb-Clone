import react from 'react';
import axios from 'axios';
import Update from '../utils/Update';
import { API_URL } from '../config';

export default class Create extends react.Component {
    state = {
        location : String,
        price : 0,
        img : '',
        dist : ''
    }
    onChangeLocation = (e) => {
        this.setState({location: e.target.value});
    }
    onChangePrice = (e) => {
        this.setState({price: e.target.value});
    }
    onChangeImg = (e) => {
        this.setState({img: e.target.value});
    }
    onChangeDist = (e) => {
        this.setState({dist: e.target.value});
    }
    CreateProperty = (e) => {
        e.preventDefault();
        axios.post(API_URL, {
            "Location": this.state.location,
            "Price": this.state.price,
            "img": this.state.img,
            "dist": this.state.dist
        }).then((res)=>{
            if(res.data != "ok create"){
                alert("An ocurred error");
            }
            else{
                alert(res.data);
            }
        })
    }
    render() {
        return (
            <div className="panel pt-3" id="containers">
                <form className='shadow-md rounded-lg pt-6 pb-8 mb-4' style={{width: '500px', height: '610px'}}>
                    <div className='flex flex-col space-y-4 bg-black px-4 pt-8 pb-1 rounded-md'>
                        <div className='flex flex-col space-y-4 mt-3'>
                            <label className='text-sm sm:text-lg text-cyan-600'>Location</label>
                            <input className='mr-6 ml-2 pl-5 flex-grow border-2 bg-gray-300 border-gray-400 rounded-md h-12 outline-none text-sm text-black placeholder-neutral-400' type="text" placeholder='Location of property' onChange={this.onChangeLocation} />
                        </div>
                        <div className='flex flex-col space-y-4 mt-3'>
                            <label className='text-sm sm:text-lg text-cyan-600'>Price</label>
                            <input className='mr-6 ml-2 pl-5 flex-grow border-2 bg-gray-300 border-gray-400 rounded-md h-12 outline-none text-sm text-black placeholder-neutral-400' type="text" placeholder='Price of property' onChange={this.onChangePrice} />
                        </div>
                        <div className='flex flex-col space-y-4 mt-3'>
                            <label className='text-sm sm:text-lg text-cyan-600'>dist</label>
                            <input className='mr-6 ml-2 pl-5 flex-grow border-2 bg-gray-300 border-gray-400 rounded-md h-12 outline-none text-sm text-black placeholder-neutral-400' type="text" placeholder='Dist of property' onChange={this.onChangeDist} />
                        </div>
                        <div className='flex flex-col space-y-4 mt-3'>
                            <label className='text-sm sm:text-lg text-cyan-600'>img</label>
                            <input className='mr-6 ml-2 pl-5 flex-grow border-2 bg-gray-300 border-gray-400 rounded-md h-12 outline-none text-sm text-black placeholder-neutral-400' type="text" placeholder='img of property' onChange={this.onChangeImg} />
                        </div>
                        <button onClick={this.CreateProperty} style={{position: 'sticky', top: '100%', width: "40%", left: "45%"}} className='text-blue-700 text-lg hover:bg-black bg-neutral-300 py-3 shadow-md rounded-full px-10 font-bold mt-5 mb-2 hover:shadow-xl active:scale-90 transition duration-150'>Post</button>
                    </div>
                </form>
            </div>
        );
    }
}