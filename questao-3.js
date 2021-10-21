function MostrarMenorNumero (a, b, c) {
    const array = [a, b, c]
    let menorNumero = array[0]

    for (let i=1; i<array.length; i++) {
        if(array[i] < menorNumero) {
            menorNumero = array[i]
        }
    }
    
    return menorNumero
}

// Exemplo
console.log(`O menor número é ${MostrarMenorNumero(60, 20, 50)}`)