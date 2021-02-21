function Apple(){
  this.color = "Red";
  setTimeout(() => {
    console.log(this.color);
  },100);
}

var newApple = new Apple();

const fruits = ["apple","banana","orange"];
const newFruits = fruits.map((fruit) => fruit);
console.log(newFruits);

function addition(a: number, b : number){
  console.log(a+b);
}
addition(1,2);


//Rest Paramaters
function addition2(...array : number[]){
  return array.reduce((previous,next) => previous + next);
}
console.log(addition2(1, 2, 3, 4, 5));