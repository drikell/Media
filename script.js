function mediaAritmetica() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);
    let num4 = parseFloat(document.getElementById("num4").value);
    let num5 = parseFloat(document.getElementById("num5").value);

    let media = (num1 + num2 + num3 + num4 + num5) / 5;

    alert(`A média das suas notas é ${media}.`);
}
  