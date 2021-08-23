const acc = document.getElementById("information");
const acc1 = document.getElementById("information1");
const acc2 = document.getElementById("information2");
const acc3 = document.getElementById("information3");
const acc4 = document.getElementById("information4");

function accordion(constName,BtnIdName,BlockIdName) {
    constName.classList.toggle("toggleBlock")
    document.getElementById(BtnIdName).classList.toggle("toggle_img")
    document.getElementById(BlockIdName).classList.toggle("block_title")
}

function More_information(){
    accordion(acc,"btn","block")
}
function More_information1(){
    accordion(acc1,"btn1","block1")
}
function More_information(){
    accordion(acc,"btn","block")
}
function More_information2(){
    accordion(acc2,"btn2","block2")
    console.log(acc2)
}
function More_information3(){
    accordion(acc3,"btn3","block3")
}
function More_information4(){
    accordion(acc4,"btn4","block4")
}
