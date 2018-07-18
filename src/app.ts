const pizza =  {
  name: 'Pepperoni',
  toppings: ['pepperoni'],
}


function order({ name: pizzaName, toppings: pizzaToppings}: any) {
  console.log(pizzaName, pizzaToppings)
}

order(pizza)