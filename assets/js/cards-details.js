(function (){
    const body = document.querySelector('body')
    const openDesc = body.querySelector('.details')
    const botaoOpenDesc = body.querySelector('button.openDesc')

function openDetails() {
    nav.addEventListener('click', (elemento) => {
      const abrirOpenDesc = 'button.openDesc'
      if (!elemento.target.matches(abrirOpenDesc)) return
      
      const openDescAberto = openDesc.classList.contains('mostrar')
      if (openDescAberto) openDesc.classList.remove('mostrar'), botaoOpenDesc.classList.remove('ativo')
      else openDesc.classList.add('mostrar'), botaoOpenDesc.classList.add('ativo')
    })
  }
  openDetails()

}())