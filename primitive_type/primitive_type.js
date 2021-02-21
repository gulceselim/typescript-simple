var number = 22;
var firstName = "Selim";
var hello = "Hello, " + firstName;
var bool = true;
function additionReturnNumber(firstValue, secondValue) {
    return firstValue + secondValue;
}
console.log(hello);
var object;
object = 1;
object = "lorem";
object = false;
object = {
    prop: 1
};
object = [1, 2, "3"];
function additionReturnVoid(firstValue, secondValue) {
    var add = firstValue + secondValue;
    console.log(add);
}
//Union and Literal
//Union : Color parameter can take multiple types.
//String Literal Type : (color: "red" | "green" | "yellow")
var appleColor;
function renkSec(color) {
    appleColor = color;
}
