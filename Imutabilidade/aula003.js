const book = {
  title: "Objeto Imutaveis",
  category: "javascript",
  author: {
    name: "Rodrigo",
    email: "rodrigo@email.com",
  },
}

function deepFreeze(Object) {
  // Obtem um array com todas as propriedades do objeto.
  const props = Reflect.ownKeys(Object)

  // Itera sobre todas as propriedades do objeto.
  for (const prop of props) {
    const value = object[prop]

    // Verifica se o valor é um objeto ou uma funçao para continuar aplicando o deepFreeze em objetos aninhados.
    if ((value && typeof value === "object") || typeof value === "function") {
      deepFreeze(value)
    }
  }

  // Retorna o objeto congelado. 
  return Object.freeze(object)
}

// Chama a funçao para congelar o objeto com o deep freeze (congelamento profundo)
deepFreeze(value)