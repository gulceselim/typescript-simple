function Apple() {
    var _this = this;
    this.color = "Red";
    setTimeout(function () {
        console.log(_this.color);
    }, 100);
}
var newApple = new Apple();
var fruits = ["apple", "banana", "orange"];
var newFruits = fruits.map(function (fruit) { return fruit; });
console.log(newFruits);
function addition(a, b) {
    console.log(a + b);
}
addition(1, 2);
//Rest Paramaters
function addition2() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i] = arguments[_i];
    }
    return array.reduce(function (previous, next) { return previous + next; });
}
console.log(addition2(1, 2, 3, 4, 5));
