//FUNÇÃO simples: recebe um nome e adiciona um <li> na lista (DOM)
adicionarNaFila (nome){
    const item = document.createElement('li');
    item.textContent = nome;
    document.getElementById('fila').appendChild(item);
}
document.getElementById('btnEntrar').addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const nome = campo.ariaValueMax.trim();

    if(nome === ''){
        alert('Digitar um nome antes de entrar na fila.');
        return;// encerrar a função aqui, sem adicionar
    }
adicionarNaFila(nome);
campo.value = '';//limpa o campo para o próximo cliente
});