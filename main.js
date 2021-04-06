function binaryToDecimal(){
  let binary = parseInt(document.getElementById('binaryInput').value, 10);
  if (Number.isInteger(binary)){
    let decimal = parseInt(binary,2);
    document.getElementById('outputText').innerHTML = decimal;
  }
  else{
    document.getElementById('outputText').innerHTML = "Not a decimal!";
  }
  
}
