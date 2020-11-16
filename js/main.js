////////////////////////////////////////add item Substract item function/////////////
function addItem(x) {
  let a = document.getElementById(x);
  let b = a.getAttribute("value");
  if (b < 5) {
    b = +b + +1;
    a.setAttribute("value", b);
  }
  sum();
}
function susbstructItem(x) {
  let a = document.getElementById(x);
  let b = a.getAttribute("value");
  if (b > 0) {
    b = +b - +1;
    a.setAttribute("value", b);
  }
  sum();
}

///////////////////////////////Like function//////////////////////////

function like(clik) {
  let heart = document.getElementById(clik);
  if (heart.style.color == "red") {
    heart.style.color = "black";
  } else {
    heart.style.color = "red";
  }
}

///////////////////////////sum function////////////////////////
let s = document.getElementById("somme").innerHTML;
let prix1 = document.getElementById("prix1").textContent;
let prix2 = document.getElementById("prix2").textContent;
let prix3 = document.getElementById("prix3").textContent;

var myTab = [1, 2, 3];

function sum() {
  s = 0;
  for (i = 1; i <= 3; i++) {
    if (document.getElementById(`input${i}`)) {
      let a = document.getElementById(`input${i}`).value;
      let b = document.getElementById(`prix${i}`).innerHTML;
      s = +s + +a * +b;
      document.getElementById("somme").innerHTML = s;
    }
  }
}
sum();

function rmv(x) {
  document.getElementById(x).remove();
}
