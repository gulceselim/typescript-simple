var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
//Object Destructuring
var AppleObj = {
    name: "Apple",
    price: 4,
    getPrice: function () {
        return AppleObj.price;
    }
};
var colors = ["Red", "Yellow", "Green"];
var product = { AppleObj: AppleObj, colors: colors };
console.log(product);
//////////////////////////////////////////
function createOrder(_a) {
    var productName = _a.name, productPrice = _a.price;
    return { productName: productName, productPrice: productPrice };
}
;
var order = createOrder(AppleObj);
console.log(order);
//////////////////////////////////////////
var productName = order.productName;
console.log(productName);
//Object Spread
var productElma = __assign(__assign({}, AppleObj), { colors: colors });
console.log(productElma);
//Array Destructuring
var winterFruits = ["orange", "mandarin"];
var firstFruit = winterFruits[0];
var secondFruit = winterFruits[1];
console.log(firstFruit);
console.log(secondFruit);
function getFruits(_a) {
    var firstFruit = _a[0], secondFruit = _a[1];
    console.log(firstFruit, secondFruit);
}
getFruits(winterFruits);
//Array Spread
var summerFruit = ["watermelon", "cherry"];
var allFruits = __spreadArrays(winterFruits, summerFruit);
console.log(allFruits);
