/*
    Temas a ver:
        - DOM, ¿Qué es? (un objeto "especial")
            - el objeto document es un objeto global que representa el documento HTML y mediante el cual vamos a interactuar.
            - ¿Cómo selecciono un elemento?
                - ID (document.getElementById)
                - Clases (document.getElementsByClassName)
                - Etiqueta (document.getElementsByTagName)
                - CSS (document.querySelector / document.querySelectorAll)
            - ¿Cómo agrego, quito or switcheo clases?
            - ¿Cómo borro un elemento (remove)?
        - Eventos, ¿qué son?
*/

/* Me guardo en variables los elementos necesarios */
const listaDeTareasUL = document.getElementById('lista-tareas');
const botonAgregar = document.getElementById('agregar');
const barrita = document.getElementById('tarea');
const listaDeBoton = document.getElementById('prioridad');

/* Crear un elemento y colocarlo en pantalla */
function crearNuevaTarea(descripcion, prioridad) {
    // Crear un nuevo elemento li y guardarlo en una variable
    const nuevaTarea = document.createElement('li');
    // Cambiar el texto interno del li
    nuevaTarea.textContent = descripcion;

    // Agregar una clase CSS al li
    nuevaTarea.classList.add(prioridad);

    // Agregar el li a la lista de tareas
    listaDeTareasUL.appendChild(nuevaTarea)
}

botonAgregar.addEventListener('click', function () {
    crearNuevaTarea(barrita.value, listaDeBoton.value);
});

listaDeTareasUL.addEventListener('click', function (evento) {
    evento.target.remove();
});