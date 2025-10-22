
document.onreadystatechange = async() =>
{

    let resultado; 
    await fetch("/database.json")
        .then(response => response.json())
        .then(data=> resultado = data.secciones[0]);

    console.log(resultado)

    let seccionesContainer = document.querySelector("#secciones");
    seccionesContainer.innerHTML = "";
    let index = 0;

    if(resultado != null || resultado != undefined)
    {
        for(let seccion in resultado){
            let button = document.createElement("button");
            let numeroDeEjercicios = resultado[seccion].ejercicios.length;
            let ejerciciosLabel = numeroDeEjercicios == 1 ? "ejercicio" : "ejercicios"
            button.id = `btn_seccion_${index}`;
            button.classList.add("seccion");

            if(resultado[seccion].terminada === "true")
                button.setAttribute("data-terminado", "true");

            button.innerHTML = `
                <span>${resultado[seccion].nombre}</span>
                <small>${numeroDeEjercicios} ${ejerciciosLabel} </small>
            `;

            button.addEventListener("click", ()=>{
                location.href= resultado[seccion].ruta;
            });

            seccionesContainer.appendChild(button);
            index++;
        }

    }

 
}
    

//     console.log("Documento ready");
//     const secciones = [
//         {
//             id: "btn_seccion_2",
//             ruta: "paginas/seccion_2.html"
//         },
//         {
//             id: "btn_seccion_3",
//             ruta: "paginas/seccion_3.html"
//         },
//         {
//             id: "btn_seccion_4",
//             ruta: "paginas/seccion_4.html"
//         }
//     ]
    
//     secciones.forEach(seccion => AsignarEvento(seccion))
// }

// function AsignarEvento(seccion){
//     let boton = document.querySelector("#" + seccion.id);
//     boton.addEventListener("click", () => {
//         console.log("click");
//          location.href = seccion.ruta
//     });
// }