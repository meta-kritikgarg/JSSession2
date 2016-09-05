function fnMakeChart() {
	var strNo1= document.getElementById('no1').value
	var strNo2= document.getElementById('no2').value
	var strNo3= document.getElementById('no3').value
	var strNo4= document.getElementById('no4').value

	if(isNaN(strNo1)||isNaN(strNo2)||isNaN(strNo3)||isNaN(strNo4)||!strNo1||!strNo2||!strNo3||!strNo4) {
		alert("Value Should be no");
	}
	else {
		var numbers = [parseInt(strNo1),parseInt(strNo2),parseInt(strNo3),parseInt(strNo4)];
		fnChart(numbers);
	}
}


function fnChart(numbers) {
 	var a=numbers[0];
	var b=numbers[1];
	var c=numbers[2];
	var d=numbers[3];	
	var max = Math.max(a,b,c,d);
	var last = "A"+ "&nbsp;" +"B" + "&nbsp;" +"C"+ "&nbsp;" +"D";
	for(var i=max;i>0;i--) {
		var str = fnPrintChart(i, a) + "&ensp;" +fnPrintChart(i, b) + "&ensp;" +fnPrintChart(i, c) + "&ensp;" +fnPrintChart(i, d)  ;
		document.getElementById('result').innerHTML =document.getElementById('result').innerHTML+ str+"<br />";
	}		
	document.getElementById('result').innerHTML =document.getElementById('result').innerHTML+ last+"<br />";
}


function fnPrintChart(loopCount, value) {
	var result;
	if(value>=loopCount) {
		result = "*";
	}
	else {
		result = "&numsp;";
	}
	return result;
}


