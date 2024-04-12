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

//el evento de submit
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    
    //validar formulario
    const {nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios.', true);

        return; //corta la ejecucion dde codigo.
    }

    //Crear la alerta de enviar mensaje
    mostrarAlerta('Mensaje enviado correctamente');


});


function leerTexto(e){
    datos[e.target.id] = e.target.value;

    //console.log(datos);
}

//CREANDO UN VALIDADOR DE FORMULARIOS 2 DE 2.
function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    //Desaparece despues de 5 segundos
    setTimeout(()=>{
        alerta.remove();
    }, 5000);
}//Reduce de dos funciones semejantes a una simple que cumple con lo necesario.


