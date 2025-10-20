document.onreadystatechange = () => {
  const datosBotones = [{
    id: "btn_1",
    ruta: "/Seccion_3/01-BEM/index.html"
   
  },
  {
    id: "btn_2",
    ruta: "/Seccion_3/02-Variables/index.html"
   
  },
    {
    id: "btn_3",
    ruta: "/Seccion_3/03-Box-Sizing/index.html"
  },
  {
    id: "btn_4",
    ruta: "/Seccion_3/04-Medidas/px-porcentajes/index.html"
    
  }
];

  datosBotones.forEach(datosBoton => {
        let boton = document.querySelector("#" + datosBoton.id)
        boton.addEventListener("click", ()=>{
            location.href = datosBoton.ruta;
        });
    })
}