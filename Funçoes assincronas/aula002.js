//setInterval() executa uma funçao apos um intervalo de tempo especificodo.

let value = 10 

const intervalo = setInterval (() => {
  console.log(value)
  value--

  if(value === 0) {
    console.log("FELIZ ANO NOVO!")

    // Interrompe o intervalo de execuçao.
    clearInterval(interval)
  }
}, 1000)