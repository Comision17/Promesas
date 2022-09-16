let x = 10
let y = 20

console.log('1- Esto va antes que la promesa')

const promesa = new Promise((resolve, reject) => {
    if (x < y) {
        resolve ('Todo salio perfecto')
    }else{
        reject('Estas haciendo las cosas mal')
    }
})

let asicronica = async () => {
    try {
        let promise = await promesa
        console.log('2- Este es el resultado de la promesa:',promise)
    } catch (error) {
        console.log('2- Tenes un error gigante en tu codigo:',error);
    }
}
asicronica()

console.log('3- Esto va despues de la promesa')

