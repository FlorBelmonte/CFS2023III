let contenedor = document.getElementById('contenedor');

let btnAgregar = document.getElementById("btnAgregar");

let vehiculos = [];

const mostrarVehiculos = () => {
  let contenedor = document.getElementById("tblVehiculos");
  let tabla = "";
  for (let v of vehiculos) {
    tabla += `<tr>
      <td>${v.marca}</td>
      <td>${v.patente}</td>
      <td>${v.modelo}</td>
      <td>${v.año}</td>
      <td>${v.precio}</td>
      <td>${v.capCarga}</td>
      <td> <a href='http://localhost:3000/vehiculoDetail.html?patente=${v.patente}' > Ver detalles </a> </td>
      <td> <button type="button" class="btnEliminar" id="${v.patente}">Eliminar</button></td>
    </tr>
    <tr>
      <td><input type="text" value="${v.marca}" id="marca${v.patente}"</td> 
      <td>${v.patente}</td>

      <td><input type="text" value="${v.modelo}" id="modelo${v.patente}"</td>
      <td><input type="number" value="${v.año}" id="año${v.patente}"</td>
      <td><input type="number" value="${v.precio}" id="precio${v.patente}"</td>
      <td><input type="number" value="${v.capCarga}" id="capCarga${v.patente}"</td>
      <td>---</td>
      <td><button class="btnUpdVehiculo" id="${v.patente}">Actualizar</button></td>
    </tr>`;
  }

  contenedor.innerHTML = tabla;

  // Funcion para borrar vehiculos
     const borrarVehiculo = async (e) => {
         let patente = e.target.id;
          let respuesta = await fetch(`/vehiculos/${patente}`, {
          method: 'DELETE',
          headers: { "Content-Type": "application/json" }
         });

    load();
  };

  let botonesBorrar = document.querySelectorAll('.btnEliminar');

  botonesBorrar.forEach(boton => {
    boton.addEventListener('click', (e) => {
      borrarVehiculo(e);
    });
  });

        async function btnActualizarClick(e) {
         let patente = e.target.id;

        let vehiculo = {
         "marca": document.querySelector(`#marca${patente}`).value,
         "modelo": document.querySelector(`#modelo${patente}`).value,
          "año": Number(document.querySelector(`#año${patente}`).value),
          "precio": Number(document.querySelector(`#precio${patente}`).value),
          "capCarga": Number(document.querySelector(`#capCarga${patente}`).value)
         };

        let respuesta = await fetch(`/vehiculos/${patente}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(vehiculo)
    });

    load();
  }

  let botonesActualizar = document.querySelectorAll(".btnUpdVehiculo");

  botonesActualizar.forEach(boton => {
    boton.addEventListener("click", (e) => {
      btnActualizarClick(e);
    });
    });
    
    };
    
    async function load() {
    const url_base = "http://localhost:3000";
    const endpoint = "/vehiculos";
    
    const respuesta = await fetch(url_base + endpoint);
    vehiculos = await respuesta.json();
    console.log(vehiculos);
    
    mostrarVehiculos();
    }
    
    const eliminar = (data) => {
    console.log("a eliminar", data);
    };
    
    const agregar = async () => {
    let marca = document.getElementById("marca").value;
    let patente = document.getElementById("patente").value;
    let modelo = document.getElementById("modelo").value;
    let año = document.getElementById("año").value;
    let precio = document.getElementById("precio").value;
    let capCarga = document.getElementById("capCarga").value;
    
    let vehiculo = {
    marca: marca,
    patente: patente,
    modelo: modelo,
    año: Number(año),
    precio: Number(precio),
    capCarga: Number(capCarga),
    };
    const response = await postVehiculoServidor(vehiculo);
    
    if (!Object.keys(response).includes("error")) {
    vehiculos.push(vehiculo);
    mostrarVehiculos();
    } else {
    // manejo de error
    }
    };
    
    const postVehiculoServidor = async (datos) => {
    const p = await fetch("/vehiculos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos),
    });
    
    return await p.json();
    };
    
    btnAgregar.addEventListener("click", agregar);
    
    load();
