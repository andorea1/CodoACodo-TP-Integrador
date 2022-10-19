function TicketCalculate (){
    var cantidad = document.getElementById("cantidad").value;
    var categoria = document.getElementById("categoria").value;

    if (cantidad === "" || categoria == 0){
        alert("Por favor ingrese cantidad de tickets y/o categoría")
        return;
    }

    var total = (cantidad * categoria);

    total = total.toFixed(2);

    document.getElementById("totalCompra").innerHTML = total;

}

document.getElementById("comprar").onclick = function (){
    TicketCalculate();
};

function Reset (){
    document.getElementById("totalCompra").innerHTML = "0.00";    
}

document.getElementById("borrar").onclick = function (){
    Reset();
};


