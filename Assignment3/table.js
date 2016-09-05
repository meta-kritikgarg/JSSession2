function fnPrintTable(){

input = document.getElementById("number");
output = document.getElementById("result");
if(isNaN(input.value) || !input.value ) {
alert("Please enter valid input");
}
else{
var number = input.value;
var result = new Array();
for(var i = 1; i <= 10 ; ++i) {
result.push(number+" x "+i+" = "+(number * i)+"<br/>");
}
output.innerHTML = result.join("");
}
}
