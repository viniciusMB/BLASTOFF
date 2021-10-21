function CalcularMediaIdades(I, J, K, X, Y) {
    let mediaIdades = (I + J + K + X + Y) / 5
    return mediaIdades
}

// Exemplo
console.log(`A média das idades foi ${CalcularMediaIdades(25, 30, 20, 15, 35)}`)