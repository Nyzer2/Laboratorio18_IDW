function nivel1(){
    try{
        console.log(x);
    }catch(error){
        console.log("Nivel 1 recibio el error: " + error.message);
        document.getElementById('mensaje').innerHTML += "Nivel 1 recibió el error: "+error.message + "<br>";
        throw error;
    }
}
function nivel2(){
    try{
        nivel1();
    }catch(error){
        console.log("Nivel 2 recibió el error: " + error.message);
        document.getElementById('mensaje').innerHTML += "Nivel 2 recibió el error: "+error.message + "<br>";
        throw error;
    }
}
document.getElementById('ejecutarBtn').addEventListener('click', function(){
    try{
        nivel2();
    }catch(error){
        console.log("ERROR capturado en el nivel superior: " + error.message);
        document.getElementById('mensaje').innerHTML += "ERROR capturado en el nivel superior:" + error.message + "<br>";
    }
});