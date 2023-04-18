import react from 'react';
import axios from 'axios';
import Card from './Card';
import { data } from 'autoprefixer';
import notfound from '../imgs/notfound.png'

class Banner extends react.Component {
    state = {
        data: []
    }
    componentDidMount() {   
        this.getDataPropertyes();
    }
    componentDidUpdate() {
        this.getDataPropertyes();
    }
    getDataPropertyes = async() => {
        const data = await axios.get('http://localhost:8000/');
        this.setState({data: data.data});
    }
    render() {
        return (
            <>
                <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:[600px] 2xl:h-[700px]'>
                    <img src='https://links.papareact.com/0fm' style={{width: "100%", height: "100%"}}/>
                    <div className='absolute top-1/2 w-full text-center'>
                        <p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>
                        <button className='text-purple-500 bg-neutral-300 py-4 shadow-md rounded-full px-10 font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>I`am Flexible</button>
                    </div>
                </div>
                <div className='px-5 py-7 d-flex mt-3 shadow-sm shadow-gray-200' style={{flexWrap: "wrap"}}>
                    {
                        this.state.data != "" ?
                        this.state.data.map((item, index) => (
                            <Card location={item.Location} price={item.Price} img={item.img} dist={item.dist} />
                        ))
                        :
                        <div className='flex content-center flex-wrap flex-col w-[100%]'>
                            <img src={notfound} className='w-[20%]'  />
                            <h1 className='text-3xl text-black text-center mt-5'>Not Found</h1>
                        </div>
                    }
                </div>
            </>
        );
    }
}
export default Banner;