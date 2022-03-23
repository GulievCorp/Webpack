import Post from "./Post";
import json from '../assets/json.json';
import './styles/styles.css';

console.log(json);

const post = new Post('Webpack Post Title');

console.log('Post to string:', post.toString());