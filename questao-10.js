function CalcularFatorial (A) {
    let fatorial = 1
    for (let i=A; i>=1; i--) {
        fatorial = fatorial * i
    }

    return fatorial
}

// Exemplo
let numero = 4
console.log(`${numero}! = ${CalcularFatorial(numero)} `)