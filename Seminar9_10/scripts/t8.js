console.log("Task8\n\n");

function arrayToList(arr){
    let list = null;
    for (let i = arr.length-1; i >= 0; i--) {
        list = prepend(arr[i],list);
    }
    return list;
}

function prepend(elem, list){
    return {
        'value': elem,
        'rest': list
    }
}

list = arrayToList([1,2,3,4,5,123,345,234,245,2345,1345]);
console.log("Сформированный кодом список: ", list);

function listToArray(list){
    let array = [];
    let ind = 0;
    while (nth(list, ind)){
        array.push(nth(list,ind));
        ind++;
    }
    return array;
}

function nth(list, ind){
    if (list){
        if (ind != 0){
            return nth(list['rest'], ind-1);
        } else{
            return list['value'];
        }
    } else return undefined;
}

array = listToArray(list);
console.log("Сформированный кодом массив (из списка): ", array);