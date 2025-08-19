function calcularTempoRestante(dataFutura) {
  let agora = new Date().getTime()
  let diferenca = dataFutura - agora

  if (diferenca <= 0) {
    return null
  }

  let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24))
  let horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60))
  let segundos = Math.floor((diferenca % (1000 * 60)) / 1000)

  return { dias, horas, minutos, segundos }
}

function atualizarTemporizador() {
  let dataFutura = new Date("2025-09-17 15:30:00").getTime()
  let tempoRestante = calcularTempoRestante(dataFutura)

  if (!tempoRestante) {
    console.log("O evento chegou!")
    clearInterval(timer)
    return
  }

  console.log(
    `${tempoRestante.dias}d ${tempoRestante.horas}h ${tempoRestante.minutos}m ${tempoRestante.segundos}s`
  )
}

let timer = setInterval(atualizarTemporizador, 1000)
atualizarTemporizador()
