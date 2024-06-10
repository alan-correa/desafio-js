const preciobase = 400000;
const aumentar = document.querySelector('#masbt');
const disminuir = document.querySelector('#menosbt');

let cantidad = 0;
let preciototal = document.querySelector('#valor-total');
let precioinicial = document.querySelector('#precio');
let cantidadtotal = document.querySelector('#cantidad');


    /*Funcion*/
const updatePrice = (action) => {
    cantidad = action == 'in'
    ?++cantidad
    :--cantidad;
    
    /*Condicion para que no sea <0*/
    if (cantidad < 0) cantidad = 0;

     /*Calculo de precio total*/
    const total = cantidad * preciobase;
    cantidadtotal.innerHTML = cantidad;
    preciototal.innerHTML = total;
    
};
