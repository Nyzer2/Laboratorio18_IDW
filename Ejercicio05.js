document.getElementById('provocarBtn').addEventListener('click',function(){
    const mensajeDiv = document.getElementById('mensaje');
    try{
        let x =null;
        x.nombre;
    }catch(error){
        if(error instanceof TypeError){
            mensajeDiv.textContent = "Se capturó un TypeError: " +error.message;
            mensajeDiv.style.color = "orange";
        }else{
            mensajeDiv.textContent = "Se capturo otro tipo de error: " +error.message;
            mensajeDiv.style.color = "red";
        }
    }
});