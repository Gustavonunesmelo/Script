const book = {
  title: "Objeto Imutaveis",
  category: "javascript",
  author: {
    name: "Rodrigo",
    email: "rodrigo@email.com",
  },
}

// Congela o objeto e impede a modificação.
Object.freeze(book)
book,category = "CSS" //Não modifica.

// O Object.freeze() não impede modificaçoes profundas em ojetos aninhados (shallow freezing).
book.author.name = "João"
console.log(book)



