var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var divOutput = document.querySelector("#div-output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function createURL(texinput) {
  return serverURL + "?text=" + input;
}

function errorHandler(error) {
  console.log("Oops an error !" + error);
}

function clickedEventHandler() {
  fetch(createURL(txtInput.value))
    .then((response) => response.json())
    .then((json) => (divOutput.innerText = json.contents.translated))
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickedEventHandler);
