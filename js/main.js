$(document).ready(function() {
    // Inicialização do carrossel de imagens
    $('#carousel-imagens').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
    });

    // Aplicação de máscaras aos campos do formulário
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    // Validação do formulário
    $('#form').validate({
        rules: {
            nome: "required",
            email: {
                required: true,
                email: true
            },
            telefone: "required",
            cpf: "required",
            endereco: "required",
            cep: "required"
        },
        messages: {
            nome: "Por favor, insira seu nome completo",
            email: "Por favor, insira um e-mail válido",
            telefone: "Por favor, insira seu telefone",
            cpf: "Por favor, insira seu CPF",
            endereco: "Por favor, insira seu endereço completo",
            cep: "Por favor, insira seu CEP"
        },
        errorElement: 'div',
        errorClass: 'error'
    });
});
