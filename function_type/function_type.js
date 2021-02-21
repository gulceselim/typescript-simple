function additionForFunctionType(firstValue, secondValue) {
    return firstValue + secondValue;
}
var additionVariable = function (firstValue, secondValue) {
    return firstValue + secondValue;
};
var additionVariable2;
additionVariable2 = function (firstValue, secondValue) {
    return firstValue + secondValue;
};
//Implicit return
additionVariable2 = function (a, b) { return (a + b); };
//Optional Paramaters
var additionOptimal;
additionOptimal = function (firstValue, secondValue) {
    if (secondValue) {
        return firstValue + secondValue;
    }
    return firstValue;
};
console.log(additionOptimal(1));
additionOptimal = function (firstValue, secondValue) {
    if (secondValue === void 0) { secondValue = 2; }
    return firstValue + secondValue;
};
console.log(additionOptimal(2));
