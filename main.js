//variáveis

let phrases = [
  "Acredite em si mesmo, e o mundo acreditará em você.",
  "A paciência é a chave para o sucesso.",
  "O destino favorece os corajosos.",
  "Grandes realizações começam com pequenos passos.",
  "Seja a mudança que você deseja ver no mundo.",
  "A melhor maneira de prever o futuro é criá-lo.",
  "A gratidão é a chave para a felicidade.",
  "Nada é impossível para aqueles que acreditam.",
  "Siga seus sonhos com determinação.",
  "A vida é uma aventura, aproveite cada momento.",
]
let randomNumber = Math.floor(Math.random() * phrases.length)
const openCookie = document.querySelector("#openCookie")
const newCookie = document.querySelector("#newCookie")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

//Events

openCookie.addEventListener("click", handleOpenCookie)
newCookie.addEventListener("click", handleNewCookie)

function handleOpenCookie() {
  document.querySelector(".screen2 p").innerHTML = phrases[randomNumber]
  document.querySelector(".screen1").classList.toggle("hide")
  document.querySelector(".screen2").classList.toggle("hide")
}

function handleNewCookie() {
  randomNumber = Math.floor(Math.random() * phrases.length)
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
