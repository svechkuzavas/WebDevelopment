function myEvery(array, func){
    i = 0;
    while(i < array.length){
        if (!func(array[i])) return false;
        i++;
    }
    return true;
}

function mySome(array, func){
    i = 0;
    while(i < array.length){
        if (func(array[i])) return true;
        i++;
    }
    return false;
}

console.log(myEvery([NaN,NaN,NaN],isNaN));
console.log(myEvery([NaN,NaN,4],isNaN));

console.log(mySome([2,2,NaN,2,1],isNaN));
console.log(mySome([2,2,2,2,2],isNaN));

