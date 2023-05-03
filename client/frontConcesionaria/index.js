let contenedor = document.getElementById('contenedor')

let btnAgregar = document.getElementById('btnAgregar');
let vehiculos = [];

const mostrarVehiculos = () => {
  let contenedor = document.getElementById('tblVehiculos');
  let tabla = '';
  for (let r of vehiculos) {
    //  console.log(r)
    tabla +=
      `<tr>
      <td>${r.marca}</td>
       <td>${r.patente}</td>
      <td>${r.modelo}</td>
      <td>${r.año}</td>
      <td>${r.precio}</td>
      <td>${r.capCarga}</td>
      <td> <a href='http://localhost:3000/vehiculoDetail.html?patente=${r.patente}' > Ver detalles </a> </td>
			<td> <button type="button" class="btnEliminar" patente="${r.patente}">Eliminar</button></td>
    </tr>
 `
  }
  contenedor.innerHTML = tabla;

  const borrarVehiculo = async(e) => {
    let patente = e.currentTarget.getAttribute('patente'); // se extrae el valor del atributo patente del botón que se presionó y lo asigna a la variable patente.

    let respuesta = await fetch(`/vehiculos/${patente}`, {
      method: 'DELETE',
      headers: {"Content-Type" : "application/json"}
    })

    load();
  }

  let botonesBorrar = document.querySelectorAll('.btnEliminar'); 

  botonesBorrar.forEach(boton => {

    boton.addEventListener('click', borrarVehiculo)
  })

};


async function load() {
  const url_base = "http://localhost:3000";
  const endpoint = "/vehiculos";

  const respuesta = await fetch(url_base + endpoint);
  vehiculos = await respuesta.json();
  console.log(vehiculos);

  mostrarVehiculos()
}
const eliminar = (data) => {
  console.log("a eliminar", data);
};

const agregar = async () => {
  let marca = document.getElementById('marca').value;
  let patente = document.getElementById('patente').value;
  let modelo = document.getElementById('modelo').value;
  let año = document.getElementById('año').value;
  let precio = document.getElementById('precio').value;
  let capCarga = document.getElementById('capCarga').value;

  let vehiculo = {
    marca: marca,
    patente: patente,
    modelo: modelo,
    año: Number(año),
    precio: Number(precio),
    capCarga: Number(capCarga)

  };
  const response = await postVehiculoServidor(vehiculo);
  if (!Object.keys(response).includes("error")){
    vehiculo.patente = response.patente;
    vehiculos.push(vehiculo)
    mostrarVehiculos()
  } else {
    //manejo de error
  }
}


const postVehiculoServidor = async (datos) => {
  const p = await fetch('/vehiculos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos)
  });
  return await p.json();
}

btnAgregar.addEventListener('click', agregar);

load();

