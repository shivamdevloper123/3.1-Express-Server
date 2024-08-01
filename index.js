import express from "express";
const app = express();

const port = 3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}.`);

});
// var generateName = require('sillyname');

// import generateName from"sillyname"

// var sillyName = generateName();

// console.log(`My name is ${sillyName}.`);

import superheroes from"superheroes"
const name = superheroes.random()
console.log(`I am${name}!`);
