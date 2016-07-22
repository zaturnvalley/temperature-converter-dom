console.log('Hello, front end');



var convertFToC = function (tempInFahr) {
	tempInCelc = ((tempInFahr - 32) * (5/9));
	return tempInCelc;
}

convertFToC(70);

var convertCToF = function (tempInCelc) {
	tempInFahr = (tempInCelc * (9 / 5) + 32);
	return tempInFahr;
}

convertCToF(0);



document.getElementById('submitButton').addEventListener('click', function(){
	var textInput = document.getElementById('textInput').value;
	if(parseInt(textInput) || parseInt(textInput===0)){
		if (document.getElementById('Fahr').checked){
			var temp = convertFToC(textInput);
			document.getElementById('result').innerHTML = temp + '&degC';
				if (temp > 30){
					document.getElementById('result').style.backgroundColor = 'red';			
				}
				if (temp < 5){
					document.getElementById('result').style.backgroundColor = 'blue';
				}
		} else {
			var temp = convertCToF(textInput);
			document.getElementById('result').innerHTML = temp + '&degF';
				if (temp > 80){
					document.getElementById('result').style.backgroundColor = 'red';			
				}
				if (temp < 40){
					document.getElementById('result').style.backgroundColor = 'blue';
				}
		}
	}
	else{
		document.getElementById('result').innerHTML = 'Please enter a numerical value';
	}

});

document.getElementById('clearButton').addEventListener('click', function(){
	document.getElementById('textInput').value = '-';
});
// document.getElementById('result').innerHTML = 'temp';


//display result
