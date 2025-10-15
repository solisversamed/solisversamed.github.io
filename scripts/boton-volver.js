document.onreadystatechange = () => {
    const button = document.querySelector("#btn-volver");

    button.addEventListener("click", (e)=> {
        let seccion = e.target.dataset.seccion;
        location.href = `../../paginas/seccion_${seccion}.html`;
    });
}