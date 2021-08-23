function buyPlusChia() {
        alert("+")}

const buyMinusChia = () => {
        alert("-")
}
var card = { product_name: "ff", id: "number_chia", image: "../img/chia_seeds.png", price: "$2333", buyPlusFc: buyPlusChia, buyMinusFc: buyMinusChia }

function buy() {
        var ava = `<div id="product_1" is="hh" class="product_tr_2">
        <div class="name_body">
            <div class="name">
                <img onclick="removeProduct()" class="vektor" src="../../img/Korzina_x_icon.png" alt="">
                <img class="product_img" src="${card.product_name}" alt="">
                <h6 class="name_title">
                    ${card.product_name}
                </h6>
            </div>
        </div>
        <div class="price_number_body">
            <div class="price_number">
                <strong class="red_number">$39.99</strong>
                <strong>${card.price}</strong>
            </div>
        </div>
        <div class="quantity_number_body">
            <div class="quantitr_number">
                <input id="${card.id}" class="number" disabled="" />                       
                <div class="btn">
                    <button class="btn_plus_minus" onclick="${card.buyPlusFc()}>+</button>
                    <button class="btn_plus_minus" onclick="${card.buyMinusFc()}>-</button>
                </div>
            </div>
        </div>
        <div class="total_number_body">
            <div class="total_number">
                <p>$59.98</p>
            </div>
        </div>
        </div>`

        document.write(ava)
}