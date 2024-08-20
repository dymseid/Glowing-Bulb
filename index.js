
var bulbstate = 1;
function bulb(){
let bulb_img = document.getElementById("bulbimg");
let text = document.getElementById("Textonn")
// bulb_img.src = "ONbulb.jpg";

if(bulbstate == 1){
    text.innerText = "Bulb Is ONN"
    bulb_img.src = "light-bulb-on.png";
    bulbstate = 0;
}
else{
    bulb_img.src = "light-bulb-off.png";
    text.innerText = "Bulb Is OFF"
    bulbstate = 1;
}
}


bulbimg.addEventListener('click',bulb);
// bulbimg.addEventListener('',bulboff);