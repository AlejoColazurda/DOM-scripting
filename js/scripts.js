//querySelector
const heading = document.querySelector('.header__texto h2')//querySelector nos va a seleccionar entre 0 o 1 Elementos de todos los disponibles con el nombre/parametros que pongamos dentro de los parentesis.
console.log(heading);

//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');//querySelectorAll sirve para seleccionar a todos los elementros que se encuentren con el nombre/parametro que pongamos dentro de los parentesis.
console.log(enlaces);
// enlaces[0].textContent = 'Nuevo Texto Para Enlace';
// enlaces[0].href = 'http://google.com/';
 enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('nueva-clase');

//getElementById
// const heading2 = documentx.getElementById('heading');
// console.log(heading2);

//Generar un nuevo enlace
const nuevoEnlace = document.createElement('A');

//Argegar el href
nuevoEnlace.href = 'nuevo-enlace.html';

//Agregar el texto
nuevoEnlace.textContent = 'Un Nuevo Enlace';

//Agregar la clase
nuevoEnlace =classList.add('navegacion__enlace');

//Agregar todo lo anterior al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace)

console.log(nuevoEnlace);

