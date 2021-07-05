(function (){

  const body = document.querySelector('body')
  const loading = document.querySelector('div[name="loading"]')

  function ativarLoading () {
    window.addEventListener('load', () => {
      setTimeout(() => {
        body.classList.remove('bloquear')
        loading.classList.add('ocultar')
      }, 500)
    })
  }

  // ATIVAR TUDO

  ativarLoading()

}())