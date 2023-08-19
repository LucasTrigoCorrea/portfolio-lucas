// Animação do laoding que fica na tela ao acessar o site

const body = document.body
const loading = document.querySelector('div.loading')

window.addEventListener('load', () => {
  setTimeout(() => {
    body.classList.remove('carregando')
    loading.classList.add('ocultar')
  }, 2500) // Quantidade de segundos que ele ficará depois do conteúdo carregar 2500 = 2.5 segundos
})
