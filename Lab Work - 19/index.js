// variable = A container that stores a value.
//            Behaves as if it were the value it contains.

// 1. decalration   let x;
// 2. assignment    x = 100;

  let title = "Simple Calculator";

  let x = 10;
  let y = 5;

  let add = x + y;
  let sub = x - y;
  let mul = x * y;
  let div = x / y;

  document.getElementById("title").textContent = title;
  document.getElementById("x").textContent = "x: " + x;
  document.getElementById("y").textContent = "y: " + y;
  document.getElementById("add").textContent = x + " + " + y + " = " + add;
  document.getElementById("sub").textContent = x + " - " + y + " = " + sub;
  document.getElementById("mul").textContent = x + " × " + y + " = " + mul;
  document.getElementById("div").textContent = x + " ÷ " + y + " = " + div;