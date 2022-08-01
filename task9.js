document.write("Check console log")
var a="<p><strong><em>Only print this</em></strong></p>"
console.log("Before removing tags: ",a)
var b=a.replace(/<([^>]+)>/gi, "")
console.log("after removing tags: ",b)