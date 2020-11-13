function addItem(x) {
  x = document.getElementById(x);
  if (x.value < 6) {
    x.setAttribute("value", +x.value + 1);
    // x.value = +x.value + 1;
  } else {
    alert("stock epuisé");
  }
  var itemsNumber1 = document.getElementById("input1").getAttribute("value"); //.value;
  var itemsNumber2 = document.getElementById("input2").getAttribute("value"); //.value;
  var itemsNumber3 = document.getElementById("input3").getAttribute("value"); //.value;
  document.getElementById("somme").innerHTML =
    itemsNumber1 * parseInt(prix1, 10) +
    itemsNumber2 * parseInt(prix2, 10) +
    itemsNumber3 * parseInt(prix3, 10);
}

function susbstructItem(y) {
  y = document.getElementById(y);
  if (y.value > 0) {
    y.setAttribute("value", +y.value - 1);
    // y.value = +y.value - 1;
  }
  var itemsNumber1 = document.getElementById("input1").getAttribute("value"); //.value;
  var itemsNumber2 = document.getElementById("input2").getAttribute("value"); //.value;
  var itemsNumber3 = document.getElementById("input3").getAttribute("value"); //.value;
  document.getElementById("somme").innerHTML =
    itemsNumber1 * parseInt(prix1, 10) +
    itemsNumber2 * parseInt(prix2, 10) +
    itemsNumber3 * parseInt(prix3, 10);
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

//////////////////////////////Somme////////////////////////////
let prix1 = document.getElementById("prix1").textContent;
let prix2 = document.getElementById("prix2").textContent;
let prix3 = document.getElementById("prix3").textContent;
let somme = document.getElementById("somme");
