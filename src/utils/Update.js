import axios from 'axios';

async function Update(location, price, img, dist) {
    const res = await axios.get('http://localhost:8000/');
    const data = res.data;
    let id = 0;
    data.filter(item => {
        if (item.location === location && item.price === price && item.img === img && item.dist === dist)
            id = item.id;
            return id;
    })
    console.log(id);
}
export default Update;