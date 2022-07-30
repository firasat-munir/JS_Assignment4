var text="The quick brown fox jumps over the lazy dog"
document.write("Text: "+text)
var result=text.match(/the/gi)
document.write("<br>There are "+result.length+" occurence(s) of word 'the'")