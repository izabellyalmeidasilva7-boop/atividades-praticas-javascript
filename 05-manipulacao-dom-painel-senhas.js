let senhaAtual = 0 ;
document.getElementById('btnChamar').addEventListener('click', function(){
    senhaAtual++;

    //SELECIONAR um elemento e MODIFICAR seu conteúdo e estilo
    const painel = document.getElementById('painel');
    painel.textContent = String(senhaAtual).padStart(3, '0');
    painel.style.background = senhaAtual % 2 === 0 ? '#5b2a86': '#2c2043';
});