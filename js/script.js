$(document).ready(function() {
    $('#cpf').mask('000.000.000-00')
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(  ) _ _ _ _ _ - _ _ _ _'
    })
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            cpf: {
                required: true
            },
            email: {
                required: true,
                email:true
            },
            telefone: {
                required: true
            },
            cep: {
                required: true
            },
            endereço: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, digite seu nome completo',
            cpf: 'Por favor, digite seu CPF',
            telefone: 'Por favor, digite seu telefone',
            cep: 'Por favor, digite seu CEP',
            endereço: 'Por favor, digite seu endereço'
        },
        invalidHandler: function(e, v) {
            const numeroInvalidos = v.numberOfInvalids()
            alert(`Tem ${numeroInvalidos} campos invalidos`)
        }
    })
})