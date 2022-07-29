var pass = prompt("Enter your Password:\n\nPassword must contain:\n-alphabets and numbers\n-should not start with a number\n-It must at least 8 characters long")
var pattern = /\w+\d/
console.log(pattern.test(pass))
console.log(pass.match(pattern))
if (pass.length >= 8 && !(/\d/.test(pass.charAt(0))) && pattern.test(pass)){
    document.write("Your password match the above conditions")
}
 else{
    alert("Enter a valid password. For character codes of a-z,A-Z & 0-9")
}