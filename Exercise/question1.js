/*function signature/sample */
function calculateVAT(price) {
  // You have to write your code here

  if (price <= 0 || typeof(price)!== "number") {;
    return "Invalid";
  } else {
    return (price * 7.5) / 100;
  }
}

price = 'foo';
a = calculateVAT(price);
console.log(a);
