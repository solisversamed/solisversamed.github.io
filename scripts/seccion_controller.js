document.addEventListener("DOMContentLoaded", async()=>
{
    let secciones; 
    let seccionContainer = document.querySelector("#temas");

    seccionContainer.innerHTML = "";

    await fetch("/database.json").then(response => response.json()).then(data => secciones = data.secciones);
    
    let parametros = new URLSearchParams(window.location.search);
    let seccionId = parametros.get("seccion");
    let seccion = secciones[parseInt(seccionId)  - 1];
    console.log(seccionId);
    

    let subtema = document.querySelector("#subtema");
    subtema.innerText = seccion.nombre + ":";
    
    let titulo = document.querySelector("#titulo");
    titulo.innerText = seccion.titulo;

    let ejercicios = seccion.ejercicios;

    for(let [index, ejercicio] of ejercicios.entries()){
        console.log("for")
        let button = document.createElement("button");
        button.id = `btn_${index}`;
        button.classList.add("tema");
        button.innerText = ejercicio.tema; 

        button.addEventListener("click", ()=> {
            location.href = ejercicio.ruta
        })
        seccionContainer.appendChild(button);
    }
})