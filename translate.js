var btnTrans = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

 var url = "https://api.funtranslations.com/translate/minion.json"
//var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function errorHandler(error){
    console.log("Error occured.." + error);
    alert("Server is offline");
}

function clickHandler() {
    var text = txtInput.value;
    var parametrizedURL = url + "?" + "text=" + text;

    function divOutput(out){
        var displayOutput = "Translated text to minion is as... ";
        txtOutput.innerHTML = displayOutput + out.contents.translated;   
    }

    fetch(parametrizedURL)
    .then(response => response.json())
    .then(json => divOutput(json))
    .catch(errorHandler)
}

btnTrans.addEventListener("click", clickHandler);








