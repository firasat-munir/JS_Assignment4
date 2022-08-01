var num=prompt("Enter your number in a range of [0-9999]")

var a=["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]
var b=["","","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"]
var result

if(num==0){
    alert("zero")
}

else if(num<20){
    result=a[num]
    alert(result)
}
else if(num<100){
    result=b[num.slice(0,1)]+" "+a[num.slice(-1)]
    alert(result)
}

else if(num<1000){
    result=a[num.slice(0,1)]+" hundred "+b[num.slice(1,2)]+" "+a[num.slice(-1)]
    alert(result)
}

else if(num<10000){
    result=a[num.slice(0,1)]+" thousand "+a[num.slice(1,2)]+" hundred "+b[num.slice(2,3)]+" "+a[num.slice(-1)]
    if(num==1000){
        result=result.replace("hundred","")
    }
    alert(result)
}

else{
    alert("Given number is out of range")
}
