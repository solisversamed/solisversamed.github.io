document.onreadystatechange = () => {
  const datosBotones = [{
    id: "btn_1",
    ruta: "/Seccion_2/repaso-css/aprendiendo_css.html"
  },
  {
    id: "btn_2",
    ruta: "/Seccion_2/repaso-flexbox/index.html"
  },
  {
    id: "btn_3",
    ruta: "/Seccion_2/repaso-grid/index.html"
  },

   {
    id: "btn_4",
    ruta: "/Seccion_2/repaso-javascript-moderno/index.html"
    
  }

];

  datosBotones.forEach(datosBoton => {
        let boton = document.querySelector("#" + datosBoton.id)
        boton.addEventListener("click", ()=>{
            location.href = datosBoton.ruta;
        });
    })
}