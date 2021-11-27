console.log('Task 1-5\n\n');

let city1 = {};
city1.name = 'ГородN';
city1.population = 10**6;
city1.getName = function(){
    return this.name;
}
city1.exportStr = function(){
    s = '';
    for (let key in this){
        if (typeof this[key] != 'function'){
            s += this[key] + '\\';
        }
    }
    s+='n';
    return s;
}
city1.getCity = getObj;

let city2 = {
    name: 'ГородM',
    population: 1e6,
    getName: function(){
        return this.name;
    },
    exportStr: function(){
        s = '';
        for (let key in this){
            if (typeof this[key] != 'function'){
                s += this[key] + '\\';
            }
        }
        s+='n';
        return s;
    },
    getCity: getObj,
}

function getObj(){
    return this;
}

console.log(city1.getName(), city2.getName());

console.log(city1.exportStr(), city2.exportStr());

console.log(city1.getCity(), city2.getCity());
