const luz = document.querySelector('#luz');

const imgLuz = document.createElement('img');
imgLuz.style.width = '250px';
imgLuz.setAttribute('src', './img/verde.jpg');

let count = 1;

function imprimirSemaforo(){
    if (count === 1) {
        imgLuz.setAttribute('src', './img/rojo.png');
        count ++;
    } else if(count === 2){
        imgLuz.setAttribute('src', './img/verde.jpg');
        count++;
    } else if(count === 3){
        imgLuz.setAttribute('src', './img/amarillo.jpg');
        count = 1;
    } 
    luz.append(imgLuz);
    
}
function detenIntervalo(semaforo){
    clearInterval(semaforo);
}
let semaforo = setInterval(() => {
    imprimirSemaforo();
}, 2000);

setTimeout(() => {
    detenIntervalo(semaforo) 
}, 8000);;
