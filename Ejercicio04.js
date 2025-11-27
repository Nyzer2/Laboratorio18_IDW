function validarEdad(edad){
    let numEdad=Number(edad);
    if(isNaN(numEdad) ||  numEdad < 0){
        throw new Error("Edad inválida");
    }
}
document.getElementById('validarBtn').addEventListener('click',function(){
    const edad = document.getElementById('edadInput').value;
    const mensajeDiv = document.getElementById('mensaje');
    try{
        validarEdad(edad);
        mensajeDiv.textContent = "Edad válida";
        mensajeDiv.style.color = "green";
    }catch{
        mensajeDiv.textContent = error.message;
        mensajeDiv.style.color = "red";
    }
});