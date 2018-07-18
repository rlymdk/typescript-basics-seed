const pizzas: number = 5

function offerDiscout(orders: number): boolean {
  return orders >= 3
}

if (offerDiscout(pizzas)) {
  console.log(`You're entitled to a discount`)
} else {
  console.log(`Order more than 3 pizzas for a discount`)
}