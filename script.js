function TicketCalculate (){
    var amount = document.getElementById("cantidad").value;
    var type = document.getElementById("categoria").value;

    if (amount === "" || type == 0){
        alert("Por favor ingrese cantidad de tickets y/o categoría")
        return;
    }

    var total = (amount * type);

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


