console.log('Task 6\n\n');

obj = {
    method1: function () {
        return this;
    },
    method2: function () {
        return this;
    },
    method3: function () {
        return "method3";
    }
};

console.log(obj.method1().method2().method3());