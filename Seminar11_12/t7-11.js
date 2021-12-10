console.log("Task 7\n\n");
d1 = [45, 78, 10, 3];
d1[7] = 100;
console.log("Массив: ", d1);
console.log("Элементы 6 и 7: ", d1[6], ",", d1[7]);

console.log("Task 8\n\n");
d2 = [45, 78, 10, 3];
sum2 = 0;
for (let i = 0; i < d2.length; i++) {
    sum2 += d2[i];
}
console.log("Сумма массива d2: ", sum2);

console.log("Task 9\n\n");
d3 = [45, 78, 10, 3];
d3[7] = 100;
sum3 = 0;
for (const elem in d3) {
    sum3 += elem;
}
console.log("Сумма массива d3: ", sum3);

console.log("Task 10\n\n");
d4 = [45, 78, 10, 3];
function my(a,b){
    return a > b ? -1 : 1;
}
console.log("Отсортированный по убыванию d4: ", d4.sort(my));

console.log("Task 11\n\n");
d5 = [];
for (let i = 0; i < 3; i++) {
    d5[i] = [];
    for (let j = 0; j < 4; j++){
        d5[i].push(5);
    }
}
console.log("Двумерный d5, сгенерированный циклами",d5);
