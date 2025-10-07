document.onreadystatechange = () => {
  const datosBotones = [{
    id: "btn_1",
    ruta: "../Seccion_2/aprendiendo_css.html"
  }];

  datosBotones.forEach(datosBoton => {
        let boton = document.querySelector("#" + datosBoton.id)
        boton.addEventListener("click", ()=>{
            location.href = datosBoton.ruta;
        });
    })
}