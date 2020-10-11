
function pizzaSize() {
    var selectedValue = document.getElementById("size").value;
    return parseInt(selectedValue);
}
function pizzaCrust() {
    var selectedCrust = document.getElementById("crust").value;
    return parseInt(selectedCrust);
}
function pizzaToppings() {
    var selectedToppings = document.getElementById("toppings").value;
    return parseInt(selectedToppings);
}
function pizzaQuantity() {
    var selectedQuantity = document.getElementById("quan").value;
    return parseInt(selectedQuantity);
}
function pizzaTotalAmount() {
    var totalAmount = (pizzaSize() + pizzaCrust() + pizzaToppings()) * pizzaQuantity();
    alert("You have Ordered" + " " + pizzaQuantity("")  +  " pizza."  +  " "  +  " The Total Amount is  "  +  (totalAmount)  +  " "  + "Rwf." +" Thank you working with us!");
    prompt("Please enter your location")
    alert("You delivery fee is 500 Rwf!")
    alert("You order will be delivered shortly!!")
    alert("Continue working with us, if you have any problem, you may contact us!! ")
}

/******TOGGLE**********************************************************/
$(document).ready(function () {
    $(".tapp, .table").click(function () {
      $("#tapp").toggle();
      $(".table").toggle();
    });
  });
  
  