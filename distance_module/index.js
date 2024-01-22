const distance = require("./Distance.js");

let dist=24;

console.log(dist+" feet is ",distance.calculate("feet",dist)+" meters!");
console.log(dist+" meters is ",distance.calculate("meters",dist)+" feet!");
console.log(dist+" miles is ",distance.calculate("miles",dist)+" kms!");
console.log(dist+" kms is ",distance.calculate("km",dist)+" miles!");