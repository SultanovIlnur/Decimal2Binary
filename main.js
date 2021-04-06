function binaryToDecimal(){
  let binary = document.getElementById('binaryInput').value;
  let decimal = parseInt(binary,2);
  if (Number.isInteger(decimal)){
    document.getElementById('outputText').innerHTML = decimal;
  }
  else{
    document.getElementById('outputText').innerHTML = "Not a decimal!";
  }
  
}
