(function (){

    const nav = document.querySelector("nav")

    // NAVBAR
  
    function ativarNavbar () {
      window.addEventListener('scroll', () => {
        const alturaPagina = window.scrollY
        if (alturaPagina < 10) nav.classList.add('scroll')
        else nav.classList.remove('scroll')
      })
    }
  
    // ATIVAR
  
    ativarNavbar()
  
  }())