/*
ARRAY: GUARDAR UN LISTADO SIN MAS, POR EJEMPLO DE FRUTAS 
SET: GUARDAR UN LISTADO DE ELEMENTOS PERO ASEGURARME QUE NO PUEDAN ESTAR REPETIDOS 
MAP: GUARDAR LOS DATOS DE UN USUARIO PARA PODER ACCEDER A ELLOS Y MODIFICAR
*/

// 1. Crea un array que almacene cinco animales

let animales = ["Perro","Gato","Pajaro","Caballo","Pez"]
console.log(animales)

// 2. Añade dos más. Uno al principio y otro al final

animales.push("Hormiga")// Añade al final
animales.unshift("Trucha")// Añade al principio
console.log(animales)


// 3. Elimina el que se encuentra en tercera posición

animales.splice(2,1)// Elimina el que se encuentra en tercera posición
console.log(animales)

// 4. Crea un set que almacene cinco libros

let libros = new Set(["El Quijote","Cien años de soledad","El principito","Crimen y castigo","El gran Gatsby"])
console.log(libros)

// 5. Añade dos más. Uno de ellos repetido

libros.add("El Hobbit")// Añade al final
libros.add("El Quijote")// Añade al final
console.log(libros)

// 6. Elimina uno concreto a tu elección

libros.delete("El Quijote")// Elimina el que se encuentra en tercera posición
console.log(libros)

// 7. Crea un mapa que asocie el número del mes a su nombre

let meses = new Map([
    [1,"Enero"],
    [2,"Febrero"],
    [3,"Marzo"],
    [4,"Abril"],
    [5,"Mayo"],
    [6,"Junio"],
    [7,"Julio"],
    [8,"Agosto"],
    [9,"Septiembre"],
    [10,"Octubre"],
    [11,"Noviembre"],
    [12,"Diciembre"]
])

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(meses.has(5))// Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(meses.get(5))//  imprime su valor


// 9. Añade al mapa una clave con un array que almacene los meses de verano

meses.set("Verano",["Junio","Julio","Agosto"])
console.log(meses.get("Verano"))// imprime su valor



// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let nombres = ["Lucia","Carmen","Leyre","Carlos","Pepe","Alvaro"]
console.log(nombres)// imprime su valor
let nombresSet = new Set(nombres)// Transforma el array a un set
console.log(nombresSet)// imprime su valor
let nombresMap = new Map([["Nombres",nombresSet]])// Almacena el set en un map
console.log(nombresMap)// imprime su valor
