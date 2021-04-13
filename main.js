const convertButton = document.getElementById('convertButton');
const copyToClipboardButton = document.getElementById('copyToClipboardButton');
const outputText = document.getElementById('outputText');

convertButton.addEventListener('click', binaryToDecimal);
copyToClipboardButton.addEventListener('click', copyToCB);

function binaryToDecimal(){
  let binary = parseInt(document.getElementById('binaryInput').value, 10);
  if (Number.isInteger(binary)){
    let decimal = parseInt(binary,2);
    outputText.innerHTML = decimal;
  }
  else{
    outputText.innerHTML = "Not a decimal!";
  }
  
}

function copyToCB(){
  let dummyTextArea = document.createElement("textarea");
  document.body.append(dummyTextArea);
  dummyTextArea.value = outputText.innerHTML;
  dummyTextArea.select();
  document.execCommand('copy');
  document.body.removeChild(dummyTextArea);
}
