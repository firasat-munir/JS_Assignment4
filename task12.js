var date=new Date();
document.write(date+"<br>")

if (date.getDate()<=15){
    document.write("First fifteen days of the month")
}
else{
    document.write("Last days of the month")
}