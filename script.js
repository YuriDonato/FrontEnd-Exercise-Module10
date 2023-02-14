$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    });
    
    $('#cpf').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    });
    $('#cep').mask('00000-000', {
        placeholder: '_____-___'
    })


    $('form').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true,
            },
            cep: {
                required: true,
            }
        },
        messages: {
            email: 'Por favor, insira um email valido',
            telefone: 'Por favor, insira um telefone valido',
            cpf: 'Por favor, insira um CPF valido',
            endereco: 'Por favor, insira um endereço valido',
            cep: 'Por favor, insira um CEP valido'
        },
        submitHandler: function(form){
            console.log(form)
        },
    })
})