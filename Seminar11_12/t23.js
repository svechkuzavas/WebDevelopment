console.log('Task 23\n\n');

function Chain(val){
    this.val = val,
    this.add = function(a){
        this.val += a;
        return this;
    },
    this.substract = function(a){
        this.val -= a;
        return this;
    },
    this.multiply = function(a){
        this.val *= a;
        return this;
    },
    this.div = function(a){
        this.val /= a;
        return this;
    }
}

example = new Chain(7).add(2).substract(1).multiply(3).div(8);
console.log(example.val);