function billetes() {
    const nombre = document.getElementById('nombre');
    const nombreValor = nombre.value;
    let cantidad = parseFloat(document.getElementById("cantidad").value);
    
    var billete_100, billete_50, billete_20, billete_10, billete_5, billete_1 = 0;
    
    var Residuo = cantidad;
    
    if(cantidad < 1 || (cantidad - Math.floor(cantidad)) > 0){
    console.log("Error: Monto a retirar debe ser positivo y mayor o igual a $1, sin decimales.");
    alert("Monto de Retiro inválido");
    } else {
    billete_100 = Math.floor(cantidad / 100);
    Residuo = cantidad - (billete_100 * 100);

    let resultadoElement = document.getElementById("resultado6");
    resultadoElement.innerHTML = "La cantidad de Billetes de 100 sera: " + billete_100;
    resultadoElement.className = "alert alert-success";
    
    billete_50 = Math.floor(Residuo / 50);
    Residuo = Residuo - (billete_50 * 50);
    let resultadoElemen = document.getElementById("resultado5"); 
    resultadoElemen.innerHTML = "La cantidad de Billetes de 50 sera: " + billete_50; 
    resultadoElemen.className = "alert alert-success";
    
    billete_20 = Math.floor(Residuo / 20);
    Residuo = Residuo - (billete_20 * 20);
    let resultadoEleme = document.getElementById("resultado4"); 
    resultadoEleme.innerHTML = "La cantidad de Billetes de 20 sera: " + billete_20; 
    resultadoEleme.className = "alert alert-success";
    
    billete_10 = Math.floor(Residuo / 10);
    Residuo = Residuo - (billete_10 * 10);
    let resultadoElem = document.getElementById("resultado3"); 
    resultadoElem.innerHTML = "La cantidad de Billetes de 10 sera: " + billete_10; 
    resultadoElem.className = "alert alert-success";
    
    billete_5 = Math.floor(Residuo / 5);
    Residuo = Residuo - (billete_5 * 5);
    let resultadoEle = document.getElementById("resultado2"); 
    resultadoEle.innerHTML = "La cantidad de Billetes de 5 sera: " + billete_5; 
    resultadoEle.className = "alert alert-success";
    
    billete_1 = Residuo;
    let resultadoEl = document.getElementById("resultado1"); 
    resultadoEl.innerHTML = "La cantidad de Billetes de 1 sera: " + billete_1; 
    resultadoEl.className = "alert alert-success";
    
    let resultadoMensaje = document.getElementById("mensajeResultado"); 
    resultadoMensaje.innerHTML = nombreValor + ", tu retiro de " + cantidad + " dólares será realizado de la siguiente manera: "; 
    resultadoMensaje.className = "alert alert-success";
    
    console.log("Billetes de $100: " + billete_100);
    console.log("Billetes de $50: " + billete_50);
    console.log("Billetes de $20: " + billete_20);
    console.log("Billetes de $10: " + billete_10);
    console.log("Billetes de $5: " + billete_5);
    console.log("Billetes de $1: " + billete_1);
    }
    };

    document.getElementById("retirarbtn").addEventListener("click", billetes);

    function limpiar(){
        var item= document.getElementById("form1");
        item.reset()

        let resultadoElement = document.getElementById("mensajeResultado"); 
        resultadoElement.innerHTML = ""; 
        resultadoElement.className = "alert alert-secondary ";

        let resultadoElement1 = document.getElementById("resultado1"); 
        resultadoElement1.innerHTML = ""; 
        resultadoElement1.className = "alert alert-secondary";

        let resultadoElement2 = document.getElementById("resultado2"); 
        resultadoElement2.innerHTML = ""; 
        resultadoElement2.className = "alert alert-secondary ";

        let resultadoElement3 = document.getElementById("resultado3"); 
        resultadoElement3.innerHTML = ""; 
        resultadoElement3.className = "alert alert-secondary";

        let resultadoElement4 = document.getElementById("resultado4"); 
        resultadoElement4.innerHTML = ""; 
        resultadoElement4.className = "alert alert-secondary";

        let resultadoElement5 = document.getElementById("resultado5"); 
        resultadoElement5.innerHTML = ""; 
        resultadoElement5.className = "alert alert-secondary";

        let resultadoElement6 = document.getElementById("resultado6"); 
        resultadoElement6.innerHTML = ""; 
        resultadoElement6.className = "alert alert-secondary";

        }
        document.getElementById("limpiarbtn").addEventListener("click", limpiar);