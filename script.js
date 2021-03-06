document.addEventListener("DOMContentLoaded", function(){
  for(var i=1; i<=100; i++){
      var select = document.getElementById("years");
      var option = document.createElement("OPTION");
      select.options.add(option);
      option.text = i;
      option.value = i;
  }
});

function compute(){
    p = document.getElementById("principal").value;
}

function displaySliderValue() {
   var val = document.getElementById("rate").value
   document.getElementById('output').innerHTML = val
}
        