    function copiarTexto() {
      const texto = document.getElementById("texto").innerText;
      navigator.clipboard.writeText(texto)
        .then(() => {
            let aviso = document.querySelector('.aviso')
            let ruim = document.getElementById('ruim')
            aviso.style.display = 'flex'
            aviso.addEventListener("animationend", ()=> {
                aviso.style.display = 'none'
                ruim.innerText = "Chave copiada com sucesso!"
            })
        })
        .catch(() => 
            ruim.innerText = "Falha ao copiar a chave!");
    }









