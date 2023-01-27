//Business Logic
function Pizza() {
  this.size = 0;
  this.toppings = {};
  this.cost = 0;
}

Pizza.prototype.costCalculator =function() {
  this.cost = length(this.toppings);
}