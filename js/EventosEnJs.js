// //Eventos
// console.log(1);

// window.addEventListener('load', function(){//load espera que el JS y los archivos que dependen del HTML estén listos
//     console.log(2);
// })

// //otra manera de ahcer lo mismo sería así:
// window.onload = function(){
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function(){//solo espera por el HTML, pero no espera CSS o imagenes.
//     console.log(4);
// });

// Console.log(5);

// window.onscroll = function(){
//     console.log('scrolling...');
// };

//seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento){
//     console.log(evento);
//     evento.preventDefault();//previene el evento natural a lo que se asocie, por ejemplo en este caso hace que el formulario no se envie. Podríamos usarlo para que se verifique que todos los campos del formulario estan completos.
//     console.log('Enviando...');
// });




//Eventos de los Inputs y textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}


const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');


nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
//validar un formulario
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    console.log('Enviando Formulario.');
});


function leerTexto(e){
    datos[e.target.id] = e.target.value;

    console.log(datos);
}


