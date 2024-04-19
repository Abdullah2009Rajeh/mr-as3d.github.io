function calculate() {
  var a = parseFloat(document.getElementById("a").value);
  var b = parseFloat(document.getElementById("b").value);
  var c = parseFloat(document.getElementById("c").value);

  var discriminant = b ** 2 - 4 * a * c;

  if (discriminant >= 0 && a !== 0) {
    var posX = (-b + Math.sqrt(discriminant)) / (2 * a);
    var negX = (-b - Math.sqrt(discriminant)) / (2 * a);
    document.getElementById("result").innerHTML =
      "X1: " + posX.toFixed(2) + "<br>X2: " + negX.toFixed(2);
  } else {
    document.getElementById("result").innerHTML =
      "Invalid input. Discriminant is negative or 'a' is zero.";
  }
}
