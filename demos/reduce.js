//old way
 total = 0 
 for(n of numbers){
    total += n
 }
 console.log(total)

 




//  new way
const numbers = [1,5,10];
const startHere = 0;
results = numbers.reduce((value, accumulator) => value + accumulator, startHere);
console.log(results)

 // new and short hand

console.log[1,5,10].reduce((v,a) => v + a, 0)

const sum = numbers => numbers.reduce((v,a) => v + a, 0);

console.log(sum(numbers));
console.log(sum([11,22,33]));

invoice = [{name: "AAA", price:"123.45"},{name: "BBB", price:"45.65"}];
const f = (v, a) => Number(v.price) + a;
console.log("TOTAL:", invoice.reduce((v,a) => Number(v.pice) + a, 0));


