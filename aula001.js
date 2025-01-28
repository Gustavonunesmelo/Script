// Shallow copy (cópia superficial): não pega os itens aninhados.

const htmlCouse = {
  course: "HTML",
  students: [{ name: "Rodrigo", email: "rodrigo@email.com" }],
}

// Deep copy

const jsCourse = {
  ...htmlCouse,
  course: "Javascript",
}

jsCourse.students = [
  ...htmlCouse.students,
  { name: "João", email: "joão@email.com"},
] 

console.log(htmlCouse, jsCourse)