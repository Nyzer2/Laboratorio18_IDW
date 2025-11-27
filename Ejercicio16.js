function cargarUsuario() {
    return new Promise((resolve) => {
        const tiempoAleatorio = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;
        setTimeout(() => {
            const usuario = { id: 1, nombre: "Juancito" };
            resolve(usuario);
        }, tiempoAleatorio);
    });
}

document.getElementById('cargarBtn').addEventListener('click', async function() {
    const usuario = await cargarUsuario();
    document.getElementById('mensaje').textContent = `Usuario cargado: ${usuario.nombre} (ID: ${usuario.id})`;
});