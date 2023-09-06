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
        for (let i = 0; i < this.height; i++){
            let row = '';
            for (let j = 0; j < this.width; j++){
                row += 'X';
            }
            console.log(row)
        }
    }

    rotate(){
        const temp = this.width;
        this.width = this.height;
        this.height = temp;
    }

    double(){
        this.height *= 2;
        this.width *= 2;
    }
}
