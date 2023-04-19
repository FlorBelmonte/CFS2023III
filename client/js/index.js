const { async } = require("rxjs");


async function load (){
    const url_base = "http://localhost:3000";
    const endpoint = "/usuarios";
  
    const respuesta = await fetch (url_base + endpoint);
    usuarios = await respuesta.json();
    console.log(usuarios)
  
  }
  load();
