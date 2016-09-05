function fnMakePyramid() {
	var strNo= document.getElementById('no1').value
	if(isNaN(strNo)||!strNo) {
		alert("Value Should be no");
	}
	else {
		var number = parseInt(strNo);
		fnPyramid(number);
	}
}

function fnPyramid(n) {
	for(var i=1;i<=n;i++) {
		var out=fnSpace(i, n)+fnStars(i, n);
		document.getElementById('result').innerHTML =document.getElementById('result').innerHTML+ out;
	}		
}


function fnSpace(row,n) {
	var out ="";
	for(var i=row;i<n;i++) {
		out=out+"&nbsp";
	}
	return out;
}	


function fnStars(row,n) {  
	var out="";
		for(var i=1;i<=row;i++) {
			out=out+"*";	
		}
		out = out+"<br/>";
	return out;
}