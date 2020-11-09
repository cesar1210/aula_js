

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //alert("Obrigado por clicar");
}

function mudar(){
    window.open("https://github.com/"); //abre em outra pagina
   // window.location.href = "https://github.com/"; //abre na mesma pagina
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Se fodeu otario kkkk";
    elemento.innerHTML = "Se fodeu otario kkkk"
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
/*
function multi(n1, n2){
    return n1 * n2;
}
*/
/*
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
*/

//alert(multi(2, 2));
/*
var d = new Date();
alert(d.getMonth() + 1);
*/
/*
var count;
for(count = 0; count <= 5; count++){
    alert(count);
};
*/

/*
var count = 1;
while (count <= 10){
    console.log(count);
    count++;

};
*/
/*
var idade = prompt("Qual sua idade");
if (idade >= 18) {
    alert("maior de idade");
}
else {
    alert("menor de idade");
};
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas)
alert(frutas[1].cor);
*/
/*
var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" * "))


//var nome = "Cesar";
//var idade = 29;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Japão","Brasil"));
