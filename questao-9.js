function Tabuada (A) {
    let tabuada = new Array(A)

    for (let i=0; i<=10; i++){
        tabuada[i] = A * i
    }

    return tabuada
}

// Exemplo
let numero = 7
const tabuada = Tabuada(numero)

for(let i = 0; i<=10; i++) {
    console.log(`${numero} X ${i} = ${tabuada[i]}`)
}