function cargarMensaje() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Mensaje cargado");
        }, 1000);
    });
}

document.getElementById('cargarBtn').addEventListener('click', async function() {
    const mensaje = await cargarMensaje();
    document.getElementById('mensaje').textContent = mensaje;
});