function Send() {
    let name = document.getElementById("name");
    let tel = document.getElementById("tel");
    let email = document.getElementById("email");
    if (name.value === "" || tel.value === "" || email.value === "") {
        alert("Please fill in the fields !")
    }else{
        alert("Ok")
    }
};