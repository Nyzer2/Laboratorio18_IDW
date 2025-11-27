function procesarLista(arreglo) {
    const promesas = arreglo.map((numero) => {
        return new Promise((resolve) => {
            const tiempoAleatorio = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
            setTimeout(() => {
                document.getElementById('mensaje').innerHTML += `Procesando ${numero}...<br>`;
                resolve();
            }, tiempoAleatorio);
        });
    });
    return Promise.all(promesas).then(() => "Proceso completado");
}

document.getElementById('procesarBtn').addEventListener('click', async function() {
    const arreglo = [1, 2, 3, 4]; 
    document.getElementById('mensaje').innerHTML = "";  
    const mensaje = await procesarLista(arreglo);
    document.getElementById('mensaje').innerHTML += mensaje;
});