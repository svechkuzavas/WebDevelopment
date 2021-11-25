console.log("Task12\n\n");

function avg(arr){
    function plus(a,b) {return a+b;}
    return arr.reduce(plus) / arr.length;
}

centuriesAge = {};
data.forEach(function(person){
    if (centuriesAge[Math.ceil(person.died/100) + ' century'] == undefined){
        centuriesAge[Math.ceil(person.died/100) + ' century'] = [person.died-person.born];
    } else{
        centuriesAge[Math.ceil(person.died/100) + ' century'].push(person.died-person.born);
    }
});

for (let key of Object.keys(centuriesAge)){
    centuriesAge[key] = avg(centuriesAge[key]) + ' years';
}

console.log(centuriesAge);