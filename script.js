function color() {
   document.getElementById("Navbar").classList.toggle("navbar2")
   document.getElementById("img_div").classList.toggle("white_img")
   document.getElementById("icon").classList.toggle("icon2")
   document.getElementById("other").classList.toggle("none")
   document.getElementById("farm").classList.toggle("none")
   document.getElementById("product").classList.toggle("none")
   document.getElementById("store").classList.toggle("none")
   document.getElementById("missing").classList.toggle("none")
}
function ReadMore() {
   let btn= document.getElementById("MoreBtn")
   document.getElementById("text").innerHTML+="</br></br>  I started to read book after by medical doctors, and ultimately stumbled upon Ann Mayer’s book. This would help me understand that rosacea is more than just a “skin” disorder. Rather, it is a complex autoimmune disease. "
   btn.style.display="none"

}