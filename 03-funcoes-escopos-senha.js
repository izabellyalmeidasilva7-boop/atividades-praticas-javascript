//variaveis de escopo global existem em todo o arquivo
let contadorPreferencial = 0;
let contadorNormal = 0;
 
//FUNÇÃO que recebe parâmetros e RETORNA um valor (escopo local)
function gerarSenha (prefixo, contadorAtual){
const numero = contadorAtual + 1;
const numeroFormatado = String(numero).padStart(3, '0');
retun `${prefixo}${numeroFormatado}`;
}
document.getElementById('btnPrefencial').addEventListener('click',function(){
    contadorPreferencial++;
    document.getElementById('senha').textContent = gerarSenha('p', contadorPreferencial -1);

})
document.getElementById('btnNormal').addEventListener('click', function(){
    contadorNormal++;
    document.getElementById('senha').textContent = gerarSenha('N', contadorNormal -1);
})