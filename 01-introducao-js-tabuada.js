//variável: guarda o número escolhido pelo o usuario
let numero = 5;

document.getElementById('btnGerar').addEventListener('click', function(){
//pega o valor e converte de texto (string) para número
numero = Number (document.getElementById('numero').value);

const lista = document.getElementById('resultado');
lista.innerHTML = ''; //limpa o resultado anterior

//loop: repete de 1 até 10, usando o OPERADOR de multiplicação
for (let i = 1; i<=10; i++){
    const item = document.createElement('li');
    item.textContent = `${numero} x ${i} = ${numero * i}`;
    lista.appendChild(item);
}

});