//Eventos
console.log(1);

window.addEventListener('load', function(){//load espera que el JS y los archivos que dependen del HTML estén listos
    console.log(2);
})

//otra manera de ahcer lo mismo sería así:
window.onload = function(){
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){//solo espera por el HTML, pero no espera CSS o imagenes.
    console.log(4);
});

Console.log(5);

window.onscroll = function(){
    console.log('scrolling...');
};