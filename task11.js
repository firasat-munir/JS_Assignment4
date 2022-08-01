var input=prompt("Enter your number to find mean of all digits")
var a=0
for(let i=0; i<input.length;i++){
    a+=Number(input.charAt(i))
}
var output=a/input.length
document.write("Given number is: <u>"+input+"</u>")
document.write("<br>Mean of all digit is: <u>"+output+"</u>")