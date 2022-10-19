function TipCalculate (){
    var amount = document.getElementById("cantidad").value;
    var service = document.getElementById("categoria").value;

    if (amount === "" || service == 0){
        alert("Por favor ingrese la cantidad y/o categoría")
        return;
    }

    var total = (amount * service);

    total = total.toFixed(2);

    document.getElementById("totalCompra").innerHTML = total;

}

document.getElementById("comprar").onclick = function (){
    TipCalculate();
};

function Reset (){
    document.getElementById("totalCompra").innerHTML = "0.00";    
}

document.getElementById("borrar").onclick = function (){
    Reset();
};


