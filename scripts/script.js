
document.onreadystatechange = () =>
{
    console.log("Documento ready");
    const secciones = [{
        id: "btn_seccion_2",
        ruta: "paginas/seccion_2.html"
    }]
    
    secciones.forEach(seccion => AsignarEvento(seccion))
}

function AsignarEvento(seccion){
    let boton = document.querySelector("#" + seccion.id);
    boton.addEventListener("click", () => {
        console.log("click");
         location.href = seccion.ruta
    });
}