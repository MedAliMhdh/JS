let prix1 = document.getElementById("prix1").textContent;
let prix2 = document.getElementById("prix2").textContent;
let prix3 = document.getElementById("prix3").textContent;
let somme = document.getElementById("somme");

function addItem(x) {
  x = document.getElementById(x);
  if (x.value < 6) {
    x.value = +x.value + 1;
  } else {
    alert("stock epuisé");
  }
  var var1 = document.getElementById("input1").value;
  var var2 = document.getElementById("input2").value;
  var var3 = document.getElementById("input3").value;
  document.getElementById("somme").innerHTML =
    parseInt(var1, 10) * parseInt(prix1, 10) +
    parseInt(var2, 10) * parseInt(prix2, 10) +
    parseInt(var3, 10) * parseInt(prix3, 10);
}

function susbstructItem(y) {
  y = document.getElementById(y);
  if (y.value > 0) {
    y.value = +y.value - 1;
  }
  var var1 = document.getElementById("input1").value;
  var var2 = document.getElementById("input2").value;
  var var3 = document.getElementById("input3").value;
  document.getElementById("somme").innerHTML =
    parseInt(var1, 10) * parseInt(prix1, 10) +
    parseInt(var2, 10) * parseInt(prix2, 10) +
    parseInt(var3, 10) * parseInt(prix3, 10);
}

///////////////////////////////Like//////////////////////////

function like(clik) {
  let heart = document.getElementById(clik);
  if (heart.style.color == "red") {
    heart.style.color = "black";
  } else {
    heart.style.color = "red";
  }
}

///////////////////////////Remove elements////////////////////////

var itemsnumber1 = document.getElementById("input1").value;
var itemsnumber2 = document.getElementById("input2").value;
var itemsnumber3 = document.getElementById("input3").value;
document.getElementById("somme").innerHTML =
  parseInt(itemsnumber2, 10) * parseInt(prix2, 10) +
  parseInt(itemsnumber3, 10) * parseInt(prix3, 10) +
  parseInt(itemsnumber1, 10) * parseInt(prix1, 10);
var var1 = document.getElementById("input1").value;
var var2 = document.getElementById("input2").value;
var var3 = document.getElementById("input3").value;

function rmv(x, y) {
  if (x.slice(x.length - 1) === "1") {
    var1 = "0";
  } else if (x.slice(x.length - 1) === "2") {
    var2 = "0";
  } else {
    var3 = "0";
  }
  document.getElementById("somme").innerHTML = 0;
  document.getElementById("somme").innerHTML =
    parseInt(var1, 10) * parseInt(prix1, 10) +
    parseInt(var2, 10) * parseInt(prix2, 10) +
    parseInt(var3, 10) * parseInt(prix3, 10);

  document.getElementById(y).remove();
}
