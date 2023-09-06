#!/usr/bin/node
module.exports = class Rectangle {
    constructor(w, h) {
        if(w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number' || !Number.isInteger(w) || !Number.isInteger(h)){
            return 'Rectangle {}';
        }
        this.width = w;
        this.height = h;
    }

    print(){
        for (let i = 0; i < this.width; i++){
            let row = '';
            for (let j = 0; j < this.height; j++){
                row += 'X';
            }
        }
        console.log(row)
    }
}
