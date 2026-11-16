let temporizadorFin;
let intervaloDeTiempo;

function cuentaAtras(){
    temporizadorFin = setTimeout(tiempoFinalizado, 30000);
    intervaloDeTiempo = setInterval(tictac, 1000);

    document.getElementById("temporizador").textContent = 30;
}

function tictac(){
    let tiempo = document.getElementById("temporizador").textContent;

    document.getElementById("temporizador").textContent = tiempo - 1;
}

function tiempoFinalizado(){
    clearInterval(intervaloDeTiempo);
    document.getElementById("temporizador").textContent = "¡GAME OVER!";
    document.getElementById("audioPerder").play();
}

function finalizar(){
    clearTimeout(temporizadorFin);
    clearInterval(intervaloDeTiempo);

    let fecha = new Date();
    let respuesta1 = document.getElementById("respuesta1").value;
    let respuesta2 = document.getElementById("respuesta2").value;
    let respuesta3 = document.getElementById("respuesta3").value;
    let respuesta4 = document.getElementById("respuesta4").value;
    let respuesta5 = document.getElementById("respuesta5").value;

    let mensaje = fecha.toLocaleDateString("es-ES") + "\n" + "1. " + respuesta1 +
                                                     "\n" + "2. " + respuesta2 +
                                                     "\n" + "3. " + respuesta3 +
                                                     "\n" + "4. " + respuesta4 +
                                                     "\n" + "5. " + respuesta5;

    alert(mensaje);
}

function volverIntentar(){
    location.reload();
}