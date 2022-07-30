var num=prompt("Enter your number")

console.log(num.slice(0,1))
console.log(num.slice(1))

var a=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]
var b=["","","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"]
var result, result1
if(num<20){
    result=a[num]
    alert(result)
}
else if(num<100){
    result1=b[num.slice(0,1)]+" "+a[num.slice(-1)]
    alert(result1)
}

