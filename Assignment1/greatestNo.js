function getLargest(strA,strB,strC) {
	var big;

	if(isNaN(strA)||isNaN(strB)||isNaN(strC)||!strA||!strB||!strC) {
		alert("Values should be numbers");
	}
	else {
	var a = parseInt(strA);
	var b = parseInt(strB);
	var c = parseInt(strC);
	if(a>b && a>c) {
	    big = a; }
	   else if(b>c){
	    big = b;}
	   else{
	    big = c;}
	document.getElementById('result').innerHTML = "Largest no is = "+big;
	}
}
