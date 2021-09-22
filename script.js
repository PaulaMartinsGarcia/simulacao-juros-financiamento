var valor = document.getElementById("valor")
var prazo = document.getElementById("prazo")
var juros = document.getElementById("juros")

var prazom = document.getElementById("prazom")
var jurosm = document.getElementById("jurosm")
var jurosa = document.getElementById("jurosa")

function calcular() {
    
    var meses =  prazo.valueAsNumber * 12;
    var jurosMensal = parseFloat(Math.pow((1 + juros.valueAsNumber), (1/12))-1).toFixed(15);
    jurosm.value = jurosMensal;
    prazom.value = meses;
    var amortizacao = valor.valueAsNumber / meses;

    var tbody = document.getElementsByTagName('tbody');
    var jurosAcumulados = 0;

    for(var i = 0;i<meses;i++){
        var saldoDevedor = valor.valueAsNumber - (amortizacao * i);
        var jr = saldoDevedor * jurosMensal;
        var total = amortizacao + jr;

        jurosAcumulados = jurosAcumulados + jr;
        if(i<5){
            tbody[0].children[i].children[1].textContent = amortizacao.toFixed(2);
            tbody[0].children[i].children[2].textContent = jr.toFixed(2);
            tbody[0].children[i].children[3].textContent = total.toFixed(2);
        }
    }
    
    jurosa.value = jurosAcumulados.toFixed(2);

    return false;
}