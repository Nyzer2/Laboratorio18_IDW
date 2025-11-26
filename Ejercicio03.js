function cargarUsuarios() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            data.forEach(user => {
                console.log(user.name);
            });
        })
        .catch(error => console.error('Error al cargar usuarios:', error));
}
document.getElementById('cargarBtn').addEventListener('click', cargarUsuarios);