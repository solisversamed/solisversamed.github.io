
document.onreadystatechange = () =>
{
    console.log("Documento ready");
    const secciones = [
        {
            id: "btn_seccion_2",
            ruta: "paginas/seccion_2.html"
        },
        {
            id: "btn_seccion_3",
            ruta: "paginas/seccion_3.html"
        },
        {
            id: "btn_seccion_4",
            ruta: "paginas/seccion_4.html"
        }
    ]
    
    secciones.forEach(seccion => AsignarEvento(seccion))
}

function AsignarEvento(seccion){
    let boton = document.querySelector("#" + seccion.id);
    boton.addEventListener("click", () => {
        console.log("click");
         location.href = seccion.ruta
    });
}