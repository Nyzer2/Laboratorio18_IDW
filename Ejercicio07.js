function cargarMensaje(callback) {
    setTimeout(() => {
        callback("Mensaje cargado");
    }, 1000);
}

document.getElementById('cargarBtn').addEventListener('click', function() {
    cargarMensaje((mensaje) => {
        document.getElementById('mensaje').textContent = mensaje;
    });
});