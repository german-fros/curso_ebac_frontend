$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault() 

        const tarefa = $('input').val()
        const itemLista = `<li>${tarefa}</li>`

        $('#lista').append(itemLista)

        $('input').val('')
        $('input').focus()

    $('li').click(function() {
        $(this).css('text-decoration', 'line-through')
    })
    })
})