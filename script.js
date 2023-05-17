$(document).ready(function() {
    $('#tel').mask('(00) 00000-0000')

    $('form').validate({
        
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true
            }
        },

        messages: {
            nome: 'Por favor, digite seu nome',
            tel: 'Por favor, digite seu telefone'
        }
    })
})