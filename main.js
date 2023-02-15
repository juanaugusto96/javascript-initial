
const celulares = [
    {nombre: "samsung", precio:120000},
    {nombre: "motorola", precio:10000},
    {nombre: "xiammi", precio:12000},
    {nombre: "nokia", precio:12000},
    {nombre: "iphone 8", precio:15000},
    {nombre: "iphone 10", precio:17000},
    {nombre: "iphone 12", precio:19000},
    {nombre: "iphone 14", precio:22000},
];


const iphone = celulares.filter((celular) => celular.nombre.includes("iphone"));
console.log(iphone)




let elegirCelular = prompt("cual celu queres?");

alert ("elegiste " + elegirCelular )






//console.log(celulares.find((celular) => celular.nombre === elegirCelular));