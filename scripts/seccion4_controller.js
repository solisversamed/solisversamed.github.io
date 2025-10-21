document.onreadystatechange = () => {
  let contenedorTemas = document.querySelector("#section_temas");

  contenedorTemas.innerHTML = "";

  const datosBotones = [{
    id: "btn_1",
    ruta: "/Seccion_4/proyecto_01/index.html",
    nombre: "Proyecto 01"
  },
  {
    id: "btn_2",
    ruta: "/Seccion_4/proyecto_02/index.html",
    nombre:"Proyecto 02"
  },
    {
    id: "btn_3",
    ruta: "/Seccion_4/proyecto_03/index.html",
    nombre:"Proyecto 03"
  },
  {
    id: "btn_4",
    ruta: "/Seccion_4/proyecto_04/index.html",
    nombre:"Proyecto 04"
  },
  {
    id: "btn_5",
    ruta: "/Seccion_4/proyecto_05/index.html",
    nombre:"Proyecto 05"
  },  
  {
    id: "btn_6",
    ruta: "/Seccion_4/proyecto_06/index.html",
    nombre:"Proyecto 06"
  },
  {
    id: "btn_7",
    ruta: "/Seccion_4/proyecto_07/index.html",
    nombre:"Proyecto 07"
  }
];


  datosBotones.forEach(datosBoton => {
      let nuevoBoton = document.createElement("button");
      nuevoBoton.classList.add("tema");
      nuevoBoton.id = datosBoton.id;
      nuevoBoton.innerText = datosBoton.nombre;
      nuevoBoton.addEventListener("click", ()=>{
            location.href = datosBoton.ruta;
        });
      
      contenedorTemas.appendChild(nuevoBoton);   
    })
}