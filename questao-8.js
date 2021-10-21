function VerificarPrimo (A) {
    let i = 2
    if (A == 0 || A == 1) return false
    while (i < A) {
        if ((A % i) == 0){
            return false
        }
        i++
    }
    
    return true
}

// Exemplo
console.log(VerificarPrimo(32))