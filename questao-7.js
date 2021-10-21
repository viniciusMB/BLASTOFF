function RetornaPares (A) {
    let i = 0
    while (i<A.length) {
        if ((A[i] % 2) != 0) {
            A.splice(i, 1)
        }
        else {
            i++
        }
    }
    return A
}

// Exemplo
let listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

console.log(RetornaPares(listaDeNumeros))