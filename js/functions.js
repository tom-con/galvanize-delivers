document.addEventListener("DOMContentLoaded", function(){
$(".button-collapse").sideNav();
var tbody = document.getElementById("tbod");
var totals = document.getElementById("total");
var tax = document.getElementById("tax");
var subtotal = document.getElementById("sub");
subtotal.innerText = "$ 0.00";
tax.innerText = "$ 0.00";
totals.innerText = "$ 0.00";
//com
var burgbutt = document.getElementById("burga");
var burgtext = document.getElementById("burger");
var icebutt = document.getElementById("icecre");
var icetext = document.getElementById("cream");
var pizzbutt = document.getElementById("piza");
var pizztext = document.getElementById("pizza");
var ribsbutt = document.getElementById("ribz");
var ribstext = document.getElementById("ribs");
var reset = document.getElementById("reset");
var fullname = document.getElementById("fullname");
var phone = document.getElementById("phonenumber");
var address = document.getElementById("address");
var submit = document.getElementById("order");
var tots = 0;
var toTax = 0;
var orderList = {
  "Burger" : 0,
  "BurgerPrice": 0.00,
  "Pizza" : 0,
  "PizzaPrice": 0.00,
  "Icecream" : 0,
  "IcecreamPrice": 0.00,
  "Ribs" : 0,
  "RibsPrice": 0.00
};
var clearAll = function(){
  while(tbody.hasChildNodes()){
    tbody.removeChild(tbody.lastChild);
  }
  tax.innerText = "$ 0.00";
  totals.innerText = "$ 0.00";
  subtotal.innerText = "$ 0.00";
  orderList.Burger = 0;
  orderList.BurgerPrice = 0.00;
  orderList.Icecream = 0;
  orderList.IcecreamPrice = 0.00;
  orderList.Pizza = 0;
  orderList.PizzaPrice = 0.00;
  orderList.Ribs = 0;
  orderList.RibsPrice = 0.00;
  tots = 0;
  toTax = 0;
}
var addFood = function(name, price){
  if(orderList[name] === 0){
    var tr = document.createElement("tr");
    var tdName = document.createElement("td");
    var tdPrice = document.createElement("td");
    tdPrice.classList.add("right");
    tdName.classList.add(name+"-item");
    tdPrice.classList.add(name+"-price");
    tr.appendChild(tdName);
    tr.appendChild(tdPrice);
    tr.classList.add("ordered"+name);
    tbody.appendChild(tr);
    total(name, price);
    tdName.innerText = name + " x " + orderList[name];
    tdPrice.innerText = "$ " + orderList[name+"Price"].toFixed(2);
  }
  else{
    var tdName = document.getElementsByClassName(name+"-item")[0];
    var tdPrice = document.getElementsByClassName(name+"-price")[0];
    total(name, price);
    tdName.innerText = name + " x " + orderList[name];
    tdPrice.innerText = "$ " + orderList[name+"Price"].toFixed(2);
  }

};
var taxs = function(price){
  toTax += price * 0.08;
  tax.innerText = "$" + toTax.toFixed(2);
  return price * 0.08;
};
var total = function(name, price) {
  tots += price;
  subtotal.innerText = "$" + tots.toFixed(2);
  tots += taxs(price);
  totals.innerText = "$"+ tots.toFixed(2);
  orderList[name] += 1;
  orderList[name+"Price"] += price;
};

burgbutt.addEventListener("click", function(){
  addFood("Burger", 8.99);
});
burgtext.addEventListener("click", function(){
  addFood("Burger", 8.99);
});
icebutt.addEventListener("click", function(){
  addFood("Icecream", 7.99);
});
icetext.addEventListener("click", function(){
  addFood("Icecream", 7.99);
});
pizzbutt.addEventListener("click", function(){
  addFood("Pizza", 11.99);
});
pizztext.addEventListener("click", function(){
  addFood("Pizza", 11.99);
});
ribsbutt.addEventListener("click", function(){
  addFood("Ribs", 14.99);
});
ribstext.addEventListener("click", function(){
  addFood("Ribs", 14.99);
});

reset.addEventListener("click", function(){
  clearAll();
});

submit.addEventListener("click", function(){
  if(fullname.value !== "" && address.value !== "" && phonenumber.value !== ""){
    Materialize.toast('Order submitted!', 4000);
    fullname.value = "";
    address.value = "";
    phonenumber.value = "";
    while(tbody.hasChildNodes()){
      tbody.removeChild(tbody.lastChild);
    }
    clearAll();

  }
  else{
    Materialize.toast('Fill in all the information!', 4000);
  }
});

});
