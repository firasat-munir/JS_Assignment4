var mail=prompt("Enter your Email Address")
var pattern=/^\w*@\w*(\.\w{2,3})/ //using bracket {2,3} for .com .co .in etc.
if(pattern.test(mail)){
    alert("Your Email format is correct")
}
else{
    alert("Invalid Email")
}
