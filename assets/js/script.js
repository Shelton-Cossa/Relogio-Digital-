const horas = document.getElementById('horas'); 
const minutos = document.getElementById('minutos'); 
const segundos = document.getElementById('segundos'); 

const dias = document.getElementById('dia'); 
const meses = document.getElementById('mes'); 
const anos = document.getElementById('ano'); 


const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hora = dateToday.getHours();
    let minuto = dateToday.getMinutes();
    let segundo = dateToday.getSeconds();

    let dia = dateToday.getDate();
    let mes = dateToday.getMonth() +1;
    let ano = dateToday.getFullYear();


    if (hora<10) hora= '0' + hora;
    if (minuto<10) minuto= '0' + minuto;
    if (segundo<10) segundo= '0' + segundo;

    horas.textContent = hora;
    minutos.textContent = minuto;
    segundos.textContent= segundo;

    dias.textContent= dia;
    meses.textContent= mes;
    anos.textContent= ano;

})