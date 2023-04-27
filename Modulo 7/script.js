const natxt = document.getElementById('natxt')
const nbtxt = document.getElementById('nbtxt')
const form = document.getElementById('form')
const ok = document.getElementById('ok')
const erro = document.getElementById('erro')

form.addEventListener('submit', function(e){
    e.preventDefault()

    if (nbtxt.value <= natxt.value) {
        const msgErro = document.createElement('p')
        
        ok.innerHTML = ''
        erro.innerHTML = ''

        msgErro.innerHTML = 'Valor inválido! <strong>Número B</strong> tem que ser <strong>maior</strong> que o <strong>Número A</strong>'
        erro.appendChild(msgErro)
        erro.classList.add('erro')
        nbtxt.style.borderColor = 'red'
        nbtxt.style.outlineColor = 'red'
    } else {
        const msgOk = document.createElement('p')

        ok.innerHTML = ''

        msgOk.innerHTML = 'Perfeito! <strong>Número B</strong> é <strong>maior</strong> que <strong>Número A</strong>'
        ok.appendChild(msgOk)

        ok.classList.add('ok')

        erro.style.display = 'none'
        nbtxt.style.borderColor = ''
        nbtxt.style.outlineColor = ''

        natxt.value = ''
        natxt.focus()
        nbtxt.value = ''
    }
})