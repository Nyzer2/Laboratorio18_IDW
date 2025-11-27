function dividirAsync(a, b, callback) {
    setTimeout(() => {
        if (b === 0) {
            callback(new Error("No se puede dividir entre cero"), null);
        } else {
            callback(null, a / b);
        }
    }, 1500);
}

document.getElementById('dividirBtn').addEventListener('click', function() {
    const a = parseFloat(document.getElementById('aInput').value);
    const b = parseFloat(document.getElementById('bInput').value);
    const mensajeDiv = document.getElementById('mensaje');
    
    dividirAsync(a, b, (error, resultado) => {
        if (error) {
            mensajeDiv.textContent = "Error: " + error.message;
            mensajeDiv.style.color = "red";
        } else {
            mensajeDiv.textContent = "Resultado: " + resultado;
            mensajeDiv.style.color = "green";
        }
    });
});