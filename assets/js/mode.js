const initLightMode = () => {
    document.querySelector('input[type="checkbox"]').addEventListener('change', () => {
      document.body.classList.toggle('light-mode')
    })
  
  }
  initLightMode()