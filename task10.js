var input=prompt("Enter your number in decimals & amount of number you want to round after decimal\ni.e 3.141592423, 2")
var a=Number(input.slice(0,input.length-3))
var b=Number(input.slice(-1))
document.write("Your number is <b><em>"+a+"</b></em> and after <b><em>"+b+"</b></em> decimal places your output will be : <b><em>"+a.toFixed(b)+"</b></em>")