/* JavaScript for WATS 3020 Sandwich Machine Assignment */


let breadOrder = prompt('What kind of bread would you like? (white, wheat, rye)', 'wheat');

let meatOrder = prompt('What kind of meat would you like? Separate meats with a comma if you would like more than one. (turkey, ham, roastbeef)');

if(meatOrder.length === 0) //Default if nothing specified but allow customer to change
  {
    meatOrder = prompt('You didn\'t choose a meat so we will make your sandwich with turkey! Change now if you prefer. Separate meats with a comma if you would like more than one.', 'turkey');
  }

let toppingsOrder = prompt('What kind of toppings would you like? Separate toppings with a comma if you would like more than one. (lettuce, tomatoes, onion, pickles, olives)');

let condimentsOrder = prompt('What kind of condiments would you like? Separate condiments with a comma if you would like more than one. (mayo, mustard, ketchup, thousand island)');


let prices = {
    sandwich: 5, // Base price for a sandwich is $5, includes bread
    meat: 1, // Each kind of meat on a sandwich costs $1
    topping: 0.5, // Each topping costs $0.50
    condiment: 0.25 // Each condiment costs $0.25
  };


let meatArray = meatOrder.split (',');
let toppingArray = toppingsOrder.split (',');
let condimentArray = condimentsOrder.split (',');

let freeTopping = "(when 2 or more are ordered)";

if(toppingArray.length > 1) //Free topping if 2 or more toppings ordered
  {	
    freeTopping = prompt('You get a free topping! Enter an extra topping if you\'d like: (lettuce, tomatoes, onions, pickles, olives)');
  }


let meatCost = meatArray.length * prices.meat;
let toppingCost = toppingArray.length * prices.topping;
let condimentCost = condimentArray.length * prices.condiment;

let subtotal = prices.sandwich + meatCost + toppingCost + condimentCost;

let waStateTaxRate = 0.065;
let orderTax = subtotal * waStateTaxRate;


let totalPrice = subtotal + orderTax;



let receiptTemplate = `
    <p>SANDWICH ORDER</p>
    <p>Bread: ${breadOrder}</p>
    <p>Meat: ${meatOrder}</p>
    <p>Toppings: ${toppingsOrder}</p>
    <p>Free Topping: ${freeTopping}</p>
    <p>Condiments: ${condimentsOrder}</p>
    <p>---------------------</p>
    <p class="text-right">Sandwich: $${prices.sandwich.toFixed(2)}</p>
    <p class="text-right">Meat: $${meatCost.toFixed(2)}</p>
    <p class="text-right">Toppings: $${toppingCost.toFixed(2)}</p>
    <p class="text-right">Condiments: $${condimentCost}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Subtotal: $${subtotal.toFixed(2)}</p>
    <p class="text-right">Tax: $${orderTax.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Total: $${totalPrice.toFixed(2)}</p>
`

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let receiptText = document.querySelector("#receipt-text");
receiptText.innerHTML = receiptTemplate;
