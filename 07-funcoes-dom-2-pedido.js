let total = 0;
//FUNÇÂO reaproveitada por todos os botões (recebe parêmetro diferentes)
function adicionarItem(NamedNodeMap, preco){
    total+= preco;

    const item = document.createElement('li');
    item.innerHTML = `<span>{nome}</span><span>R${preco}</span>`;
    document.getElementById('carrinho').appendChild(item);
    atualizarTotal();
}
function atualizarTotal(){
    document.getElementById('total').textContent = `Total: R$ %{Total}`;
}