function additionForFunctionType(firstValue: number, secondValue: number): number{
  return firstValue + secondValue;
}

let additionVariable = (firstValue: number, secondValue: number): number => {
  return firstValue + secondValue;
}

let additionVariable2 : (a : number, b : number) => number;

additionVariable2 = (firstValue, secondValue): number => {
  return firstValue + secondValue;
}

//Implicit return
additionVariable2 = (a,b) => (a+b)



//Optional Paramaters
let additionOptimal : (a: number, b?: number) => number;

additionOptimal = (firstValue, secondValue): number => {
  if(secondValue){
    return firstValue + secondValue;
  }

  return firstValue;
}

console.log(additionOptimal(1));

additionOptimal = (firstValue, secondValue = 2): number => {
  return firstValue + secondValue;
}

console.log(additionOptimal(2));