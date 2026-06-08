/* recuperar los elementos en la parte superior de las clases modoOscuro y card

Color dark == #2d1da5 
Color light == #dedede                                                      */

let botonModoOscuro = document.querySelector(".modoOscuro");
let card = document.querySelector(".card");
let tel = document.querySelector(".telefono");

botonModoOscuro.addEventListener("click" , function(e) {

    let modo = this.innerText;
    let dark = "Modo Oscuro";
    let light = "Modo Claro"
    let lightColor = "#ffffff";

    if (modo == dark) {
        card.style.backgroundColor = "#2d1da5";
        this.innerText = light;
        tel.style.color = lightColor;
    } else {
        card.style.backgroundColor = lightColor;
        this.innerText = dark;
        tel.style.color = "#000"
    }
   

})
