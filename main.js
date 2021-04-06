function binaryToDecimal(){
  let binary = document.getElementById('binaryInput').value;
  if (Number.isInteger(binary)){
    let decimal = parseInt(binary,2);
    document.getElementById('outputText').innerHTML = decimal;
  }
  else{
    document.getElementById('outputText').innerHTML = "Not a decimal!";
  }
  
}
