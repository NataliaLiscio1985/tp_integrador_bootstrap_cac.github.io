

const DESC_ESTUDIANTE = 0.2, DESC_TRAINEE = 0.5, DESC_JUNIOR = 0.85;
const CANTIDAD = document.getElementById("cantidad");
const CATEGORIA = document.getElementById("seleccionCategorias");
const BTNRESUMEN = document.getElementById("btnResumen");
const BTNBORRAR = document.getElementById("btnBorrar");
let ValorEntrada=200;
let = totalAPagar = 0;

function calculoAPagar() {

    if (CATEGORIA.value == "estudiante"){
        totalAPagar = (ValorEntrada*CANTIDAD.value)*DESC_ESTUDIANTE;}
    else if (CATEGORIA.value == "trainee"){
            totalAPagar = (ValorEntrada*CANTIDAD.value)*DESC_TRAINEE;}
    else{
        totalAPagar = (ValorEntrada*CANTIDAD.value)*DESC_JUNIOR};

    document.getElementById("muestraTotal").innerHTML = 'Total a Pagar : $'+ totalAPagar;    
}

function borrarContenido(){
    document.getElementById("muestraTotal").innerHTML = 'Total a Pagar : $';
}

BTNBORRAR.onclick = borrarContenido;
BTNRESUMEN.onclick = calculoAPagar;