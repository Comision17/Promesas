let x = 10
let y = 20

console.log('1- Esto va antes que la promesa')

const promesa = new Promise((resolve, reject) => {
    if (x === y) {
        resolve ('Todo salio perfecto')
    }else{
        reject('Estas haciendo las cosas mal')
    }
})

promesa
.then(resultado => {
    console.log('2- Este es el resultado de la promesa:',resultado)
    let elemento = 'Algo que tenemos aca'
    return elemento
})
.then(elemento => {
    console.log(elemento);
})
.catch(error => {
    console.log('2- Tenes un error gigante en tu codigo:',error);
})

/* promesa
.then(resultado => {
    console.log('2- Este es el resultado de la promesa:',resultado)
    let elemento = 'Algo que tenemos aca'
    return elemento
},error => {
    console.log('2- Tenes un error gigante en tu codigo:',error);
})
.then(elemento => {
    console.log(elemento);
},error => {
    console.log('2- Tenes un error gigante en tu codigo:',error);
}) */

console.log('3- Esto va despues de la promesa')