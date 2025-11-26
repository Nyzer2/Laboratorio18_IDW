async function cargarUsuario() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/10');
        const data = await response.json();
        console.log('Name:', data.name);
        console.log('Username:', data.username);
        console.log('Email:', data.email);
    } catch (error) {
        console.error('Error al cargar usuario:', error);
    }
}
document.getElementById('cargarBtn').addEventListener('click', cargarUsuario);