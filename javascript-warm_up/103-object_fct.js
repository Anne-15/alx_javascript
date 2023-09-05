#!/usr/bin/node
const myObject = {
    type: 'object',
    value: 12,
    incr: incr
  };
console.log(myObject);

function incr(){
    this.value++;
}

for (let i = 0; i < 4; i++) {
    console.log(`{ type: '${myObject.type}', value: ${myObject.value}${i === 0 ? '' : `, incr: [Function]`}}`);
    myObject.incr();
}

myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);