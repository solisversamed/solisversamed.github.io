document.onreadystatechange = ()=>{
    if(document.querySelector("#btn-volver") == null)
    {
        let newStyle = document.createElement("link");
        newStyle.href="/css/boton-volver-style.css";
        newStyle.rel="stylesheet";

        document.head.appendChild(newStyle);

        let newScript = document.createElement("script");
        newScript.src = "/scripts/boton-volver.js";
        document.head.appendChild(newScript);

        let headerVolver = document.createElement("header");

        let h1 = document.querySelector("h1");
        if(h1 != null){
            let newh1 = h1.cloneNode(true);
            headerVolver.prepend(newh1);
            h1.remove();
        }
        
        let buttonVolver = document.createElement("button");
        buttonVolver.id="btn-volver";
        buttonVolver.innerText="Volver";
        buttonVolver.setAttribute("data-seccion", "4");

        headerVolver.append(buttonVolver)

        document.body.prepend(headerVolver);
    }
   
}