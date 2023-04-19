let btnAgregar = document.getElementById('btnAgregar');
let btnAutor = document.getElementById('btnAutor');
let btnTituloModerno = document.getElementById('btnTituloModerno');
let btnTituloAntiguo = document.getElementById('btnTituloAntiguo');

let documentos = [];

const agregar = () => {
    let titulo = document.getElementById('titulo').value;
    let autor = document.getElementById('autor').value;
    let contenido = document.getElementById('contenido').value;
    let fecha = document.getElementById('fecha').value;

    let documento = {
        "titulo": String(titulo),
        "autor": autor,
        "contenido": String(contenido),
        "fecha": Number(fecha)
    }

    documentos.push(documento);

    mostrarDocumentos();
  
}

const mostrarDocumentos = () => {
    let contenedor = document.getElementById('tblDocumentos');
    let tabla = '';

    for (let doc of documentos) {
        tabla +=
      `<tr>
            <td>${doc.titulo}</td>
            <td>${doc.autor}</td>
           <td>${doc.contenido}</td>
           <td>${doc.fecha}</td>
        </tr>
        `
    }

    contenedor.innerHTML = tabla;

}
//Funcion para saber cúal es el autor con mas documentos 

function encontrarAutorConMasDocumentos() {
  let conteoAutores = {};
  for (let i = 0; i < documentos.length; i++) {
    let autor = documentos[i].autor;
    if (autor in conteoAutores) {
      conteoAutores[autor]++;
    } else {
      conteoAutores[autor] = 1;
    }
  }
  let maxCantidad = 0;
  let maxAutor = "";
  for (let autor in conteoAutores) {
    if (conteoAutores[autor] > maxCantidad) {
      maxCantidad = conteoAutores[autor];
      maxAutor = autor;
    }
  }
  let autorConMasDocumentos = document.getElementById("total");
  autorConMasDocumentos.innerHTML =  `<p>el autor con mas documentos es ${maxAutor} con ${maxCantidad} cantidad de obras</p> `
}



//Funcion para saber cual es el titulo mas moderno 

const encontrarTituloMasModerno = () => {

  let max = documentos[0].fecha;
  for (let doc of documentos){
      if(max < doc.fecha){
          max = doc.fecha
      }
  } 

  let contenedor_total = document.getElementById('total');
  contenedor_total.innerHTML = 
  `<p> el titulo mas moderno es  : ${max}</p>`;
}

//Funcion para saber cual es el titulo mas antiguo 

const encontrarTituloMasAntiguo = () => {

  let min = documentos[0].fecha;
  for (let doc of documentos){
      if(min > doc.fecha){
          min = doc.fecha
      }
  } 

  let contenedor_total = document.getElementById('total');
  contenedor_total.innerHTML = 
  `<p> el titulo mas antiguo es del año : ${min}</p>`;
}


btnAgregar.addEventListener('click', agregar);
btnAutor.addEventListener('click', encontrarAutorConMasDocumentos);
btnTituloModerno.addEventListener('click', encontrarTituloMasModerno);
btnTituloAntiguo.addEventListener('click', encontrarTituloMasAntiguo)
