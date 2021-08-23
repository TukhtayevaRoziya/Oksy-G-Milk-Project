function Call() {

var tel =document.getElementById("telefon").value
let peopleName =document.getElementById("name").value

if(tel=="" && peopleName==""){
    alert("Please field tel and name!")
}
else if (tel=="") {
    alert("Please field tel!")
}else if(peopleName==""){
    alert("Please field people!")
}else{
    alert("Ok")
}
}