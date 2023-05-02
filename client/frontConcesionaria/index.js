let contenedor = document.getElementById('contenedor')

let btnAgregar = document.getElementById('btnAgregar');
let vehiculos = [];

const mostrarVehiculos = () => {
  let contenedor = document.getElementById('tblVehiculos');
  let tabla = '';
  for (let r of vehiculos) {
     console.log(r)
    tabla +=
      `<tr>
      <td>${r.marca}</td>
       <td>${r.patente}</td>
      <td>${r.modelo}</td>
      <td>${r.año}</td>
      <td>${r.precio}</td>
      <td>${r.capCarga}</td>
      <td> <a href='http://localhost:3000/vehiculoDetail.html?patente=${r.patente}' > Ver detalles </a> </td>

    </tr>
 `
  }
  contenedor.innerHTML = tabla;
}


async function load() {
  const url_base = "http://localhost:3000";
  const endpoint = "/vehiculos";

  const respuesta = await fetch(url_base + endpoint);
  vehiculos = await respuesta.json();
  console.log(vehiculos);

  mostrarVehiculos()
}

const agregar = async () => {
  let marca = document.getElementById('marca').value;
  let patente = document.getElementById('patente').value;
  let modelo = document.getElementById('modelo').value;
  let año = document.getElementById('año').value;
  let precio = document.getElementById('precio').value;
  let capCarga = document.getElementById('capCarga').value;

  let vehiculo = {
    "marca": marca,
    "patente": patente,
    "modelo": modelo,
    "año": Number(año),
    "precio": Number(precio),
    "capCarga": Number(capCarga)

  }
  if (aServidor(vehiculo)) {
    vehiculos.push(vehiculo);
    mostrarVehiculos();
  }
}


const aServidor = async (datos) => {
  let respuesta = await fetch('/vehiculos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos)
  });
  return (await respuesta.text() == "ok");
}



btnAgregar.addEventListener('click', agregar);

load();

