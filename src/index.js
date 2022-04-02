import Post from "@modules/Post";
import json from '../assets/json.json';
import './styles/styles.css';
import Pepe from '../assets/pepe.jpg'
import xml from '../assets/data.xml';
import csv from '../assets/data.csv';
import * as $ from 'jquery';

let pepeImg = document.querySelector('.pepe');

pepeImg.src = Pepe;
pepeImg.alt = 'PEPE'

console.log($);

console.log(xml, 'xml');
console.log(csv, 'csv');
console.log(json);


$('h6').html('popaPisya');

const post = new Post('Webpack Post Title', Pepe);

console.log('Post to string:', post.toString());