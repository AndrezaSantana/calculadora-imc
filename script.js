function submit() {
    var weight = $('#weight').val();
    var height = $('#height').val();

    var calc = weight / Math.pow(height, 2) * 10000;
    var result = parseFloat(calc.toFixed(2));
    
    $('#imc').html(result);

    if (result <= 16.9) {
        $('#classification').html("Muito abaixo do peso");
        $('#range').html("IMC: 0 a 16,9");
        $('#description').html("Sintomas: Queda de cabelo, infertilidade, ausência menstrual");
    }
    else if (result <= 18.4) {
        $('#classification').html("Abaixo do peso");
        $('#range').html("IMC: 17 a 18,4");
        $('#description').html("Sintomas: Fadiga, stress, ansiedade");
    }
    else if (result <= 24.9) {
        $('#classification').html("Peso normal");
        $('#range').html("IMC: 18,5 a 24,9");
        $('#description').html("Sintomas: Menor risco de doenças cardíacas e vasculares");
    }
    else if (result <= 29.9) {
        $('#classification').html("Acima do peso");
        $('#range').html("IMC: 25 a 29,9");
        $('#description').html("Sintomas: Fadiga, má circulação, varizes");
    }
    else if (result <= 34.9) {
        $('#classification').html("Obesidade Grau I");
        $('#range').html("IMC: 30 a 34,9");
        $('#description').html("Sintomas: Diabetes, angina, infarto, aterosclerose");
    }
     else if (result <= 40) {
        $('#classification').html("Obesidade Grau II");
        $('#range').html("IMC: 35 a 40");
        $('#description').html("Sintomas: Apneia do sono, falta de ar");
    }
     else {
        $('#classification').html("Obesidade Grau III");
        $('#range').html("IMC: maior que 40");
        $('#description').html("Sintomas: Refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC");
    }
    
    $('.result').show();
    $('html, body').animate({scrollTop:$(document).height()}, 'slow');
}

$( '#clear' ).click(function() {
  $( '.result').hide();
})
