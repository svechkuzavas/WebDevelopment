console.log('Task 24\n\n');

function Unit(x, y){
    this.x = x;
    this.y = y;
}

Unit.prototype = {
    get X() {return this.x;},
    get Y() {return this.y;},
    set X(val) {this.x=val;},
    set Y(val) {this.y=val;}
}

function Fighter(power){
    this.power = power;
}

Fighter.prototype = Unit.prototype;
Fighter.prototype += {
    get power() {return power;},
    set power(val) {this.power = val;}
}

f = new Fighter(8);
f.X = 4;
f.Y = 5;
console.log(f.Y);

