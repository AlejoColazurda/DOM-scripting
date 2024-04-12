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

const btnEnviar = document.querySelector('.boton--orimario');
btnEnviar.addEventListener('click', function(evento){
    console.log(evento);
    evento.preventDefault();//previene el evento natural a lo que se asocie, por ejemplo en este caso hace que el formulario no se envie. Podríamos usarlo para que se verifique que todos los campos del formulario estan completos.
    



    console.log('Enviando...');
});