function binaryToDecimal(){
  let binary = document.getElementById('binaryInput').value;
  let decimal = parseInt(binary,2);
  document.getElementById('outputText').innerHTML = decimal;
}
