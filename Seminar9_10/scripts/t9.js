function deepEqual(o1, o2){
    if (Object.keys(o1).length != Object.keys(o2).length){
        return false;
    }

    for (let key of Object.keys(o1)){
        if ((isObj(o1[key]) && isObj(o2[key])) && !deepEqual(o1[key], o2[key])
        || !(isObj(o1[key]) || isObj(o2[key]))  && o1[key] !== o2[key]){
            return false;
        }
    }
    return true;
}

function isObj(val){
    return typeof val === 'object' && val != null;
}

a = {
    'x': {
        'y': {
            'z': 'check',
            'r': 'check',
        },
        'x':{
            'a': 'value'
        }
    },
    'y': 'test'
}

b = {
    'x': {
        'y': {
            'z': 'check',
            'r': 'check',
        },
        'x':{
            'a': 'value'
        }
    },
    'y': 'test1'
}

console.log(deepEqual(a,a));
console.log(deepEqual(a,b));