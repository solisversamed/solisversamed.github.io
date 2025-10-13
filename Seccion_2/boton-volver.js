document.onreadystatechange = () => {
    const button = document.querySelector("#btn-volver");

    button.addEventListener("click", ()=> {
        location.href = "../../paginas/seccion_2.html";
    });
}