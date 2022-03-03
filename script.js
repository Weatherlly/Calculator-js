function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('resultado').innerHTML = "";
}
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        var resultado = document.getElementById('resultado').innerHTML = resultado + ' = ' + eval(resultado);
    }
}
function raiz()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        var resultado = document.getElementById('resultado').innerHTML = '√(' + resultado + ') = ' + Math.sqrt(resultado);
    }
}
function sin()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        var resultado = document.getElementById('resultado').innerHTML = 'sin(' + resultado + ') = ' + Math.sin(resultado);
    }
}
function cos()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        var resultado = document.getElementById('resultado').innerHTML = 'cos(' + resultado + ') = ' + Math.cos(resultado);
    }
}
const resultado = [];
document.getElementById('historico').innerHTML = resultado
function save()
{
    resultado.push(document.getElementById('resultado').innerHTML);
    document.getElementById('historico').innerHTML = resultado;
}
