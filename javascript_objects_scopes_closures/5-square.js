const Rectangle = require('./4-rectangle')

module.exports = class Square extends Rectangle{
    constructor(size){
        super(width, height)
        this.size = size;
    }
}