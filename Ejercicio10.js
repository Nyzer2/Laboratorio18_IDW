function procesarLista(arreglo, callback) {
    let contador = 0;
    arreglo.forEach((numero) => {
        const tiempoAleatorio = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
        setTimeout(() => {
            document.getElementById('mensaje').innerHTML += `Procesando ${numero}...<br>`;
            contador++;
            if (contador === arreglo.length) {
                callback("Proceso completado");
            }
        }, tiempoAleatorio);
    });
}
document.getElementById('procesarBtn').addEventListener('click', function() {
    const arreglo = [1, 2, 3, 4]; 
    document.getElementById('mensaje').innerHTML = "";  
    procesarLista(arreglo, (mensaje) => {
        document.getElementById('mensaje').innerHsTML += mensaje;
    });
});