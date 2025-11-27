function cargarMensaje() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Mensaje cargado");
        }, 1000);
    });
}

document.getElementById('cargarBtn').addEventListener('click', function() {
    cargarMensaje().then((mensaje) => {
        document.getElementById('mensaje').textContent = mensaje;
    });
});