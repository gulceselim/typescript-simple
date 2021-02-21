let number : number = 22;

let firstName : string = "Selim"
let hello : string = `Hello, ${firstName}`

let bool : boolean = true;


function additionReturnNumber(firstValue: number, secondValue: number) : number {
  return firstValue + secondValue;
}  

console.log(hello);

let object : any;
object = 1;
object = "lorem";
object = false;
object = {
  prop : 1
};
object = [1, 2, "3"];

function additionReturnVoid(firstValue: number, secondValue: number) : void {
  let add : number = firstValue + secondValue;
  console.log(add);
} 



//Union and Literal
//Union : Color parameter can take multiple types.
//String Literal Type : (color: "red" | "green" | "yellow")
let appleColor : string;
function renkSec(color: "red" | "green" | "yellow") : void{
  appleColor = color;
}
