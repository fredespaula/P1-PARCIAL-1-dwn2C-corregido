"use strict";
const d = document;
let $form = d.getElementById("formulario");

/*
 * XXXXX
 */

// Ejemplo de la estructura de un disco:
let $disco = {
  Nombre: "El lado oscuro de la Programación",
  Autor: "Los Programadores Anónimos",
  Codigo: 1,
  Pistas: [
    {
      Nombre: "Esa cajita loca llamada variablecita",
      Duracion: 200,
    },
    {
      Nombre: "Nunca quise ser un NaN",
      Duracion: 180,
    },
    {
      Nombre: "No quiero programar",
      Duracion: 90,
    },
    {
      Nombre: "Bajo presión",
      Duracion: 240,
    },
    {
      Nombre: "La odisea de las variables privadas",
      Duracion: 120,
    },
    {
      Nombre: "Sr. Programador",
      Duracion: 720,
    },
  ],
};
const result = [];

//discos disponibles
let discos = [];
//agrega el disco existente
discos.push($disco);

function convert(disco) {
  let keys = Object.keys(disco);
  keys.forEach(function (key) {
    result.push(disco[key]);
  });

  return result;
}
// d.addEventListener('DOMContentLoaded',()=>{
//     console.log($disco);
// })
result.forEach((ele) => {
  // console.log(ele);
});

const $btnAgregar = d.getElementById("btnAgregar");
$btnAgregar.addEventListener("click", function (event) {
  //IMPORTANTE PARA QUE NO RECARGUE LA PAGINA
  event.preventDefault();

  //HACE LA VALIDACIÓN
  //SI LA VALIDACION DA ERROR, PARA LA EJECUCION CON RETURN FALSE
  if (validarCampos() == false) {
    console.log("primero debe llenar los campos");
    return false;
  }

  //SI NO HUBO ERROR DE VALIDACION, SIGUE
  const $grupo_nombre_dura = d.createElement("div"),
    $divNombrePista = d.createElement("div"),
    $divDuracion = d.createElement("div"),
    $labelNombre = d.createElement("label"),
    $labelDuracion = d.createElement("label");
  const $divMasPistas = d.getElementById("masPistas");

  $divMasPistas.class = "form-group";
  $labelNombre.class = "col-form-label";
  $labelDuracion.class = "col-form-label";
  $labelNombre.textContent = "Nombre Pista";
  $labelDuracion.textContent = "Duracion";

  // $spanNombre.innerHTML='Nombre Pista';
  // $spanDuracion.innerHTML='Duracion pista';
  /* const $btnEnviar = d.createElement("input");
  $btnEnviar.type = "submit";
  $btnEnviar.value = "Cargar";
  $btnEnviar.class = "btn btn-secondary"; */

  const $inputNombre = d.createElement("input");
  $inputNombre.type = "text";
  $inputNombre.name = "nombre";
  $inputNombre.class = "form-control";
  $inputNombre.required = "true";

  const $inputDuracion = d.createElement("input");
  $inputDuracion.type = "text";
  $inputDuracion.name = "duracion";
  $inputDuracion.class = "form-control";
  $inputDuracion.required = "true";

  //agrega una clase al grupo y a los inputs dentro
  $grupo_nombre_dura.classList.add("grupo_nombre_dura");
  $inputNombre.classList.add("nombre");
  $inputDuracion.classList.add("duracion");

  $divNombrePista.appendChild($labelNombre);
  $divNombrePista.appendChild($inputNombre);
  $divDuracion.appendChild($labelDuracion);
  $divDuracion.appendChild($inputDuracion);

  $grupo_nombre_dura.appendChild($divNombrePista);
  $grupo_nombre_dura.appendChild($divDuracion);
  //   $grupo_nombre_dura.appendChild($btnEnviar);
  $divMasPistas.appendChild($grupo_nombre_dura);
  // validarCampos()
});
const validarCampos = () => {
  // console.log('esta bien');
  let $nombre = d.getElementById("nombre").value,
    $autor = d.getElementById("autor").value,
    $codigo = d.getElementById("codigo").value;
  if ($nombre.length == 0) {
    alert("No has escrito nada en el nombre del disco");
    return false;
  }
  if ($autor.length == 0) {
    alert("No has escrito nada en el autor");
    return false;
  }
  if ($codigo.length == 0) {
    alert("No has escrito nada en el codigo");
    return false;
  }

  $codigo = parseInt($codigo);

  // AQUI EL && DEBE SER ||
  // porque se debe leer "codigo menor o igual a cero O mayor o igual a mil, da error"
  // no se debe leer "codigo menor o igual a cero Y mayor o igual a mil, da error"
  // porque no existe un numero menor a cero y mayor a mi la la vez

  if ($codigo <= 0 || $codigo >= 1000) {
    alert("el codigo debe ser entre 1 y 999");
    return false;
  }

  if (discos.find((elemento, index) => elemento.Codigo == $codigo)) {
    alert("Este código ya existe");
    return false;
  }
  return true;
};

// var clave = document.getElementById('autor').value;
// if (clave.length < 6) {
//   alert('La clave no es válida');
//   return;
// }
// this.submit();

//     let $existe=false;
//     const $inputs=d.querySelectorAll('#formulario [required]');
//     // console.log($inputs);

//     $inputs.forEach((input)=>{
//         if(input.value==""){
//                 const $span=d.createElement('span');
//                 $span.id=input.name;
//                 $span.id=input.id;
//                 $span.textContent=input.title;
//                 input.insertAdjacentElement("afterend",$span);

//     }
// })

// Discos:
// let discos = [];

// Función Cargar:
const Cargar = () => {
  $("#CargarDisco").modal();
};

// Función Mostrar:
const Mostrar = () => {
  // Variable para ir armando la cadena:
  let contenedor_principal = "<div class='discos'>";
  let html = "";
  discos.forEach((disco) => {
    console.log(disco);
    html +=
      "<div class='disco'></div>" +
      "<h3><b> El nombre del disco es: </b><br>" +
      disco.Nombre +
      "</h3><br><h3><b>" +
      "El nombre del autor es: </b><br>" +
      disco.Autor +
      "</h3><br><h3>" +
      "<b>El codigo es: </b>" +
      disco.Codigo +
      "</h3><br><div class='Pistas'>" +
      "<h4>" +
      "Pista 1: " +
      disco.Pistas[0].Nombre +
      "</h4>" +
      "<br>" +
      "<h5>" +
      "La duracion es: " +
      disco.Pistas[0].Duracion +
      "</h5>" +
      "<br>" +
      "<h4>" +
      "Pista 2: " +
      disco.Pistas[1].Nombre +
      "</h4>" +
      "<br>" +
      "<h5>" +
      "La duracion es: " +
      disco.Pistas[1].Duracion +
      "</h5><br><h4>" +
      "Pista 3: " +
      disco.Pistas[2].Nombre +
      "</h4>" +
      "<br>" +
      "<h5>" +
      "La duracion es: " +
      disco.Pistas[2].Duracion +
      "</h5>" +
      "</div>" +
      "</div>" +
      "<div class='discos'>" +
      "<div class='disco'></div>" +
      "<h3><b> El nombre del disco es: </b><br>" +
      disco.Nombre +
      "</h3><br><h3><b>" +
      "El nombre del autor es: </b><br>" +
      disco.Autor +
      "</h3><br><h3>" +
      "<b>El codigo es: </b>" +
      disco.Codigo +
      "</h3><br><div class='Pistas'>" +
      "<h4>" +
      "Pista 1: " +
      disco.Pistas[0].Nombre +
      "</h4>" +
      "<br>" +
      "<h5>" +
      "La duracion es: " +
      disco.Pistas[0].Duracion +
      "</h5>" +
      "<br>" +
      "<h4>" +
      "Pista 2: " +
      disco.Pistas[1].Nombre +
      "</h4>" +
      "<br>" +
      "<h5>" +
      "La duracion es: " +
      disco.Pistas[1].Duracion +
      "</h5><br><h4>" +
      "Pista 3: " +
      disco.Pistas[2].Nombre +
      "</h4>" +
      "<br>" +
      "<h5>" +
      "La duracion es: " +
      disco.Pistas[2].Duracion +
      "</h5>" +
      "</div>";
  });

  //agrega el contenido y cierra el div
  contenedor_principal += html;
  contenedor_principal += "</div>";

  // Cositas:

  // Si modificaste el nombre de la variable para ir armando la cadena, también hacelo acá:
  document.getElementById("info").innerHTML = contenedor_principal; // <--- ahí es acá
};
// d.addEventListener("keyup",(e)=>{
//     if(e.target.matches('#formulario [required]')){
//         if(e.target.matches('#codigo')){
//             // console.log("validacion codigo");

//         }
//     }
// })
// (
//     function(){
//         $('#btnModal').onClick('click',function(){
//             $('#CargarDisco').modal();
//         })
//     }
// )
// Todas las funciones que necesites:

$form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validarCampos() == false) {
    return false;
  }
  if (confirm("Deseas agregar alguna pista más?")) {
    return;
  }

  let $nombre = d.getElementById("nombre"),
    $autor = d.getElementById("autor"),
    $codigo = d.getElementById("codigo"),
    $btnEnviarForm = d.getElementById("btnEnviarForm");

  let pistas = [];

  const inputs_pistas = d.querySelectorAll(".grupo_nombre_dura");
  let error = null;
  inputs_pistas.forEach((grupo) => {
    //busca el nombre
    let nombre = grupo.querySelector(".nombre");
    //busca la duracion
    let duracion = grupo.querySelector(".duracion");

    if (nombre.value.length == 0 || duracion.value.length == 0) {
      error = "Ingrese un nombre y duración correcto";
      return;
    }

    duracion = parseInt(duracion.value);
    if (duracion < 0 || duracion > 7200) {
      error = "Ingrese una duración correcta";
      return;
    }

    pistas.push({
      Nombre: nombre.value,
      Duracion: duracion,
    });
  });

  if (error != null) {
    alert(error);
    return false;
  }

  let nuevoDisco = crearDiscoEstructura(
    $nombre.value,
    $autor.value,
    $codigo.value,
    pistas
  );

  //agrega un nuevo disco a la lista
  discos.push(nuevoDisco);

  //oculta el modal
  $("#CargarDisco").modal("hide");

  //vacia los valores cargados y elimina las pistas
  $nombre.value = "";
  $autor.value = "";
  $codigo.value = "";
  inputs_pistas.forEach((grupo) => {
    grupo.remove();
  });


  //   $codigo.addEventListener("change", function () {});
});

const crearDiscoEstructura = (nombre, autor, codigo, pistas) => {
  return {
    Nombre: nombre,
    Autor: autor,
    Codigo: codigo,
    Pistas: pistas,
  };
};

const Mostrar_Nuevo = () => {
  // Variable para ir armando la cadena:
  let html = "";
  discos.forEach((disco) => {
    html +=
      "<div class='discos col-4'>" +
      "<div class='disco'></div>" +
      "<h3><b> El nombre del disco es: </b><br>" +
      disco.Nombre +
      "</h3><br><h3><b>" +
      "El nombre del autor es: </b><br>" +
      disco.Autor +
      "</h3><br><h3>" +
      "<b>El codigo es: </b>" +
      disco.Codigo +
      "</h3><br>" +
      "<div class='Pistas'>";

    disco.Pistas.forEach((pista) => {
      html += "<h4>" + "Pista: " + pista.Nombre + "</h4>" + "<br>";
      //muestra en rojo si es mayor a 180
      if (pista.Duracion > 180) {
        html += '<h5 class="text-danger">';
      } else {
        html += "<h5>";
      }
      html += "La duracion es: " + pista.Duracion + "</h5>" + "<br>";
    });
    html += "</div>" + "</div>";
  });
  document.getElementById("info").innerHTML = html; // <--- ahí es acá
};
