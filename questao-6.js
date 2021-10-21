function CalculaTempoPartida (horasA, minutosA, horasB, minutosB) {
    if (horasA > horasB) {
        horasB = horasB + 24
    }
    let totalA = (horasA * 60) + minutosA
    let totalB = (horasB * 60) + minutosB
    horasPartida = Math.floor((totalB - totalA) / 60)
    minutosPartida = (totalB - totalA) % 60

    return [horasPartida, minutosPartida]
}

// Exemplo
let tempoPartida = CalculaTempoPartida(21, 00, 23, 30) // de 21:00 até 23:30
if (tempoPartida[0] > 1 && tempoPartida[1] > 1) {
    console.log(`A partida durou ${tempoPartida[0]} horas e ${tempoPartida[1]} minutos.`)
}
else {
    console.log(`A partida durou ${tempoPartida[0]} hora e ${tempoPartida[1]} minutos.`)
}
