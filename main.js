/* Me guardo en variables los elementos necesarios */
const listaDeTareasUL = document.getElementById("lista-tareas");
const botonAgregar = document.getElementById("agregar");
const barrita = document.getElementById("tarea");
const listaDeBoton = document.getElementById("prioridad");

/* Crear un elemento y colocarlo en pantalla */
function crearNuevaTarea(descripcion, prioridad) {
  // Crear un nuevo elemento li y guardarlo en una variable
  const nuevaTarea = document.createElement("li");
  // Cambiar el texto interno del li
  nuevaTarea.textContent = descripcion;

  // Agregar una clase CSS al li
  nuevaTarea.classList.add(prioridad);

  // Agregar el li a la lista de tareas
  listaDeTareasUL.appendChild(nuevaTarea);
}

botonAgregar.addEventListener("click", function () {
  fetch("http://localhost:4000/tareas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({titulo: barrita.value, prioridad: listaDeBoton.value})
  }).then(function(respuesta) {
    console.log(respuesta);
  })
 /*  crearNuevaTarea(barrita.value, listaDeBoton.value); */
});

listaDeTareasUL.addEventListener("click", function (evento) {
  evento.target.remove();
});

/* Función para cargar tareas desde el servidor */
function cargarTareas() {
  /* Utilizar fetch para acceder a las tareas */
  fetch("http://localhost:4000/tareas", {
    method: "GET",
  }).then(function (respuesta) {
    console.log(respuesta);
    return respuesta.json();
  }).then(function (respuestaJSON) {
      const cantidadDeTareas = respuestaJSON.length;
      
      /* Probar con respuestaJSON.map() */
      for(i = 0; i < cantidadDeTareas; i++) {
        crearNuevaTarea(respuestaJSON[i].titulo, respuestaJSON[i].prioridad)
      }
  })
}

cargarTareas();
