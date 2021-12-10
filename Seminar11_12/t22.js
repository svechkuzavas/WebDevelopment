console.log('Task 22\n\n');

Number.prototype.isOdd = function(){
    return this % 2 != 0;
}

a = new Number(5);
b = new Number(6);
console.log(a.isOdd());
console.log(b.isOdd());
