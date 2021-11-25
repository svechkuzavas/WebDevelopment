let a = [[1,3,7], [2,4,5], [54,13,42], [1], [200,300]];
let d = a.reduce(function(arr, subarr){
    return arr.concat(subarr);
});
console.log(d)
