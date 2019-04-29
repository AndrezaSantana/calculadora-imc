function submit(){
   var a = document.getElementById('peso').value;
   var b = document.getElementById('altura').value;
   
    function imc(a,b){
    result = a/Math.pow(b, 2)*10000;
    var arredondado = parseFloat(result.toFixed(2));
    return arredondado;
    }
    alert(imc(a,b));
}

//validar formulário
//exibir o resultado no corpo da página