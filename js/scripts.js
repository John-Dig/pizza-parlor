//Business Logic
function Pizza() {
  this.size = "";
  this.toppings = [];
  this.cost = 0;
  this.customer = "";
}

Pizza.prototype.addUpOrder =function() {
  let sizeCost;
  if (this.size === "" || this.toppings === []){
    return "";
  }
  else if (this.size === "small"){
    sizeCost = 3;
  }
  else if (this.size === "medium"){
    sizeCost = 5;
  }
  else if (this.size === "large"){
    sizeCost = 7;
  }
  this.cost = this.toppings.length * 1.5 + sizeCost;
  return ":  $" + this.cost.toFixed(2);
}
Pizza.prototype.updateCheckoutDisplay = function() {
  document.getElementById("name").innerText = this.customer;
  if (this.toppings === []){
  }
  else if (this.toppings !== []) {document.getElementById("checkout").innerText = this.size + ": " + (this.toppings).join(', ');
  } 
}


//temp console

let pizza1 = new Pizza;
let order = pizza1;
pizza1.customer = "Dr. Drake Ramoray";

Pizza.prototype.newCustomer = function(customerName) {
  this.size = "";
  this.toppings = [];
  this.cost = 0;
  this.customer = customerName;
}

//UI Logic
window.addEventListener("load", function(e){
  e.preventDefault();
  this.document.getElementById("name-click").addEventListener("click", function() {
    order.customer = document.getElementById("name-input").value;
    order.updateCheckoutDisplay();
   


  })

  document.getElementById("size").addEventListener("change", function(){
    order.size = document.getElementById("size").value;
    order.updateCheckoutDisplay();
  });
  
  
  document.getElementById("red-sauce").addEventListener("click", function(){
    order.toppings.push("red sauce");
    order.updateCheckoutDisplay();
  })
  this.document.getElementById("cheese").addEventListener("click", function(){
    order.toppings.push("cheese");
    order.updateCheckoutDisplay();
  })
  this.document.getElementById("pepperoni").addEventListener("click", function(){
    order.toppings.push("pepperoni");
    order.updateCheckoutDisplay();
  })
  this.document.getElementById("olives").addEventListener("click", function(){
    order.toppings.push("olives");
    order.updateCheckoutDisplay();
  })  
  this.document.getElementById("total-order-button").addEventListener("click", function(){
    document.getElementById("price").innerText = "Total Cost: " + order.addUpOrder();
    //document.querySelector(".hidden").classList.toggle("hidden");
  })
  //cant use button, mystery hiding/ showing activity going on
  // this.document.getElementById("complete-order-button").addEventListener("click", function() {
  //   //final display
  //   document.querySelector(".hidden").classList.toggle("hidden");
  // })
  this.document.getElementById("reset").addEventListener("click", function() {
    //document.querySelector(".hidden").classList.toggle("hidden");
    let customer = document.getElementById("name-input").value;
    order.newCustomer('');
    console.log(order.cost);
    order.updateCheckoutDisplay();
    //order.newCustomer(
    
  });
});