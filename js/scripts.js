//Business Logic
function Pizza() {
  this.size = 0;
  this.toppings = [];
  this.cost = 0;
}

Pizza.prototype.costCalculator =function() {
  this.cost = this.toppings.length * 1.5 + this.size * 2;
  return "$" + this.cost.toFixed(2);
}

//temp console
let pizza1 = new Pizza;
pizza1.toppings.push("chicken");
pizza1.toppings.push("peppers");
pizza1.toppings.push("sauce");
pizza1.size = 3;

