let buyNumber = document.getElementById("number")
let buyNumber2 = document.getElementById("number2")

buyNumber.value = 1
buyNumber2.value = 1

function buyPlus() {
    buyNumber.value++
}
function buyPlus2() {
    buyNumber2.value++
}

const buyMinus = () => {
    if (buyNumber.value != 1) {
        buyNumber.value--
    } else {
        document.getElementById("product_1").remove()
    }
}
const buyMinus2 = () => {
    if (buyNumber2.value != 1) {
        buyNumber2.value--
    } else {
        document.getElementById("product_1").remove()
    }
}

const removeProduct = () => {
    document.getElementById("product_1").remove()
}
