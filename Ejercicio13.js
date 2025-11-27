function dividirAsync(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (b === 0) {
                reject(new Error("No se puede dividir entre cero"));
            } else {
                resolve(a / b);
            }
        }, 1500);
    });
}

document.getElementById('dividirBtn').addEventListener('click', function() {
    const a = parseFloat(document.getElementById('aInput').value);
    const b = parseFloat(document.getElementById('bInput').value);
    const mensajeDiv = document.getElementById('mensaje');
    
    dividirAsync(a, b)
        .then((resultado) => {
            mensajeDiv.textContent = "Resultado: " + resultado;
            mensajeDiv.style.color = "green";
        })
        .catch((error) => {
            mensajeDiv.textContent = "Error: " + error.message;
            mensajeDiv.style.color = "red";
        });
});