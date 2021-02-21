//Object Destructuring
const AppleObj = {
  name : "Apple",
  price : 4,
  getPrice(){
    return AppleObj.price;
  }  
};

const colors = ["Red","Yellow","Green"];
const product = {AppleObj, colors};
console.log(product);

//////////////////////////////////////////

function createOrder({name: productName, price: productPrice}){
  return {productName, productPrice};
};
const order = createOrder(AppleObj);
console.log(order);

//////////////////////////////////////////

const {productName} = order;
console.log(productName);


//Object Spread
const productElma = {...AppleObj, colors};
console.log(productElma);


//Array Destructuring
const winterFruits = ["orange","mandarin"];
const [firstFruit] = winterFruits;
const [,secondFruit] = winterFruits;
console.log(firstFruit);
console.log(secondFruit);

function getFruits([firstFruit, secondFruit] : string[]){
  console.log(firstFruit,secondFruit);
}

getFruits(winterFruits);

//Array Spread
const summerFruit = ["watermelon","cherry"];
const allFruits = [...winterFruits,...summerFruit];
console.log(allFruits);