let Ticket1 = 40
let Ticket2 = 100
let Ticket3 = 170

let Descuento1 = document.querySelector('#Descuento1')
let Descuento2 = document.querySelector('#Descuento2')
let Descuento3 = document.querySelector('#Descuento3')

let comprar=()=>{
    let Cantidad = document.querySelector('#Cantidad')[0];
    let numero = document.getElementsByClassName('circulo')[0];
    let resultado = document.querySelector('#Suma');
    suma+= parseInt(Cantidad.innerText);
    contador++

    numero.textContent=contador
    return resultado.innerHTML = `<p>${suma}</p>`
};