'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('k.json');
let data = JSON.parse(rawdata);
data.forEach((obj, index) => obj.id = index + 1);
console.log(JSON.stringify(data));
