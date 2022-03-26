import Post from "./Post";
import json from '../assets/json.json';
import './styles/styles.css';
import Pepe from '../assets/pepe.jpg'

let pepeImg = document.querySelector('.pepe');

pepeImg.src = Pepe;
pepeImg.alt = 'PEPE'

console.log(json);

const post = new Post('Webpack Post Title', Pepe);

console.log('Post to string:', post.toString());