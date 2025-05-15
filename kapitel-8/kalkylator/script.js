let ruta_tal1 = document.querySelector("#tal1")
let ruta_tal2 = document.querySelector("#tal2")
let ruta_svar = document.querySelector("#svar");

function plus() { 
    if (Number(ruta_tal1.value||ruta_tal2.value)<11) {
        ruta_svar.value = "Idiot";
    }
    else ruta_svar.value = Number(ruta_tal1.value) + Number(ruta_tal2.value);
}
function minus() {

    ruta_svar.value = Number(ruta_tal1.value) - Number(ruta_tal2.value);
}
function multi() {

    ruta_svar.value = Number(ruta_tal1.value) * Number(ruta_tal2.value);
}
function divide() {

    if (ruta_tal2.value == "0") {
        ruta_svar.value = "Fuck You"
    }
    else ruta_svar.value = Number(ruta_tal1.value) / Number(ruta_tal2.value);
}


