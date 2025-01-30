function asyncFunction() {
  return new Promise((resolve, reject) => {
    // Simula uma operaçao assincrona.
    setTimeout(() => {
      const isSuccess = true

      if (isSuccess) {
        resolve("A operação foi concluida com sucesso.")
      } else {
        reject("Algo deu errado!")
      }
    }, 3000)
  })
}
/*
console.log ("Executando função assíncrona...")

asyncFunction()
  .then((response) => {
    console.log("Sucesso:", response)
  })
  .catch((error) => {
    console.log("Erro:", error)
  })
  .finally(() => {
    console.log("Fim da execução")
  })
*/

async function fetch() {
  try {
    const response = await asyncFunction()
    console.log("Sucesso:", response)
  } catch (error) {
    console.log("Erro:", error)
  } finally {
    console.log("Fim da execução!")
  }
}

fetch()