import './style.css'
import {multiply} from "./math";

document.write('Hello, webpack!!!! new\n');

import * as math from './math'

console.log('ES6 modules!');
console.log('sum = ' + math.sum(2, 3));
console.log('multiply from index.js = ' + multiply(5));
console.log('multiply from math = ' + math.multiply(5));

