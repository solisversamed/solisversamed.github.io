//Variables
let nombre = 'Enrique Solis';
nombre = "enrique";

//Mostrar por consola
console.log(nombre);

//Constantes
const apellido = "solis";
let altura = 167;
console.log(altura);

//Concatenacion
let concatenacion = `Mi nombre es ${nombre} y mi apellido es: ${apellido}`;

//Seleccionar elementos de la pagina
let datos = document.querySelector("#datos");
datos.innerHTML = `
    <hr/>
    <h1>Soy la caja de datos</h1>
    <h2>${concatenacion}</h2>
    <h3>Mido ${altura} cm</h3>
`;
    
//Condiciones
if(altura >= 185){
    datos.innerHTML += "<h1>Eres una persona alta</h1>";
}else{
    datos.innerHTML += "<h1>Eres una persona bajita</h1>"
}

//Bucles
// for(let year = 2000; year <= 2023; year++){
//     datos.innerHTML += `<h2>Estamos en el año ${year}</h2>`;
// }

//Arrays
let nombres = ["Enrique", "Kelvin", "Bill"];

let divNombres = document.querySelector("#nombres");

// divNombres.innerHTML += nombres[2];

divNombres.innerHTML = "<h1>Listado de nombres</h1><ul>";
// nombres.forEach(nombre => {
//     divNombres.innerHTML += "<li>" + nombre + "</li>";
// });

for(let nombre of nombres){
     divNombres.innerHTML += "<li>" + nombre + "</li>";
}

divNombres.innerHTML += "</ul>";

//Funciones

const miInformacion = (nombre, altura) => {
    let misDatos = `
        <hr/>
        <h1>Soy la caja de datos</h1>
        <h2>Mi nombre es ${nombre}</h2>
        <h3>Mido ${altura} cm</h3>
    `;
    
    return misDatos;
}

console.log(miInformacion("Enrique", 167));

const imprimir = () => {
    let datos = document.querySelector("#datos");
    datos.innerHTML += miInformacion("enrique", 167);
}

imprimir();
imprimir();
imprimir();
imprimir();
imprimir();