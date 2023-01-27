//Business Logic
function Pizza() {
  this.size = 0;
  this.toppings = [];
  this.cost = 0;
  this.customer = "";
}
Pizza.prototype.checkout =function() {
  this.cost = this.toppings.length * 1.5 + this.size * 2;
  return this.customer + ":  $" + this.cost.toFixed(2);
}

//temp console
let pizza1 = new Pizza;
pizza1.toppings.push("chicken");
pizza1.toppings.push("peppers");
pizza1.toppings.push("sauce");
pizza1.size = 3;
pizza1.customer = "Richard"



