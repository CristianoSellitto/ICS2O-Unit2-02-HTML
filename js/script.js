// Cristiano | ICS2O-Unit2-02-HTML | March 10 2022


/*
  Does basic math.
*/
function doMathQuestions() {
  document.getElementById("math-addition").innerHTML = "<p>5 + 3 = " + (5 + 3) + "</p>"
  document.getElementById("math-subtraction").innerHTML = "<p>5 - 3 = " + (5 - 3) + "</p>"
  document.getElementById("math-multiplication").innerHTML = "<p>5 × 3 = " + (5 * 3) + "</p>"
  document.getElementById("math-division").innerHTML = "<p>5 ÷ 2.5 = " + (5 / 2.5) + "</p>"
  document.getElementById("math-powers").innerHTML = "<p>5 + 3² = " + (5 + 3 ** 2) + "</p>"
}
