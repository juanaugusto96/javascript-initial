
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
let carrito = []


let seleccion = prompt("queres comprar un celu??");

while(seleccion != "si" && seleccion != "no"){
    alert("ingresa si o no");
    seleccion = prompt("si o no");
}
if(seleccion == "si"){
    alert("Nuestra lista de celulares");
    let todosLosCelulares = celulares.map((celular) => celular.nombre + " " + celular.precio + "$ ");
    alert(todosLosCelulares.join(" - "))
} else if (seleccion == "no")
alert ("gracias por visitarnos")

while (seleccion != "no"){
    let celular = prompt ("agrega un celular a tu carrito")
    let precio = 0

    if(celular == "samsung" || celular == "motorola" || celular == "xiaomi" || celular == "nokia" || celular == "ihpone 8" || celular == "iphone 10 " || celular == "iphone 12" || celular == "iphone 14" ){
        switch(celular){
            case "samsung":
            precio = 120000;
            break;
            case "motorola":
                precio = 10000;
                break;
                case "xiaomi":
                    precio = 12000;
                    break;
                    case "nokia":
                        precio = 12000;
                        break;
                        case "iphone 8":
                            precio = 15000;
                            break;
                            case "iphone 10":
                                precio = 17000;
                                break;
                                  case "iphone 12":
                                 precio = 19000;
                                 break; 
                                    case "iphone 14":
                                  precio = 22000;
                                   break;
                                   default:
                                    break;
        }
        let unidades = parseInt(prompt("cuantas unidades?"))

        carrito.push({celular , unidades , precio})
        console.log(carrito)
    }else{
        alert("no tenemos ese telefono")
    }
    seleccion = prompt("queres seguir comprando?");

    while( seleccion === "no"){
    alert("gracias por tu compra")
    carrito.forEach((carritoFinal )=> { console.log (`celular: ${carritoFinal.celular}, unidades ${carritoFinal.unidades} ,total a pagar por celular ${carritoFinal.unidades * carritoFinal.precio}  `)})
    break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades ,0)
console.log (`el total a pagar es :${total}`)
 




 
//const iphone = celulares.filter((celular) => celular.nombre.includes("iphone"));
//console.log(iphone)


//console.log(celulares.find((celular) => celular.nombre === elegirCelular));