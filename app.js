var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var divOutput = document.querySelector("#div-output");

console.log(divOutput);

btnTranslate.addEventListener("click", clickedEventHandler);

function clickedEventHandler() {
  console.log("clicked!");
  console.log(txtInput.value);
  divOutput.innerText = "translated text " + txtInput.value;
  
}
