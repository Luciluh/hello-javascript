/*
Clase 27 - Maps
Vídeo: https://youtu.be/1glVfFxj8a4?t=10755
*/

// Map -- El map nos permite que solo tengamos una clave unica asociada a un valor
//el valor "name" no se podra repetir 

// Declaración

let myMap = new Map()

console.log(myMap)

// Inicialiación -- Podemos mezclar tipo de variables

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

console.log(myMap)

// Métodos y propiedades

// set -- actualizar o añadir un elemento al mapa, sino existe por ejemplo el alias..la crea 

myMap.set("alias", "mouredev")
myMap.set("name", "Brais Moure")

console.log(myMap)

// get -- ponemos entre los ( ) la key, y nos devuelve el valor de esta, sino existe el valor
//de la key nos devuelve undefined

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has -- comprobamos si una clave existe o no, nos devuelve un boolean. true si existe, false sino

console.log(myMap.has("surname"))
console.log(myMap.has("age"))

// delete --

myMap.delete("email")

console.log(myMap)

// keys, values y entries

console.log(myMap.keys()) //nos retorna un listado con las claves
console.log(myMap.values()) //nos retorna un listado con los valores
console.log(myMap.entries()) //nos retorna el par de lista (key y value)

// size -- nos indica el tamaño del mapa

console.log(myMap.size)

// clear -- limpiar el mapa entero

myMap.clear()

console.log(myMap)



