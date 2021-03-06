document.addEventListener("DOMContentLoaded", function(){
  for(var i=1; i<=100; i++){
      var select = document.getElementById("years");
      var option = document.createElement("OPTION");
      select.options.add(option);
      option.text = i;
      option.value = i;
  }
  displaySliderValue();
});

function compute(){
    p = document.getElementById("principal").value;
}

function displaySliderValue() {
   var val = document.getElementById("rate").value
   document.getElementById('output').innerHTML = val+"%"
}

function displayResult() {
   var depositAmount = "<span>"+document.getElementById("principal").value+"</span>";
   var interestRate =  "<span>"+document.getElementById("rate").value+"</span>";
   var finalAmount =  "<span>"+getFinalAmount()+"</span>";
   var finalYear =  "<span>"+getFinalYear()+"</span>";
   document.getElementById("result").innerHTML = "If you deposit " + depositAmount +", <br /> at an interest rate " + interestRate + "%  <br />" +
   "You will receive an amount of "+ finalAmount + ",<br />" +
   "In the year " + finalYear;
}

function getFinalAmount(){
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    return (principal * rate / 100)*years;
}

function getFinalYear(){
    var years = document.getElementById("years").value;
    var today = new Date();
    var futureDate = today.setDate(today.getDate() + 365 * years);
    console.log(years);
    console.log(futureDate);
    return futureDate;
}
        