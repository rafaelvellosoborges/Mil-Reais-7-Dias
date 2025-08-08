/* VARIAVEIS
 UM ESPAÇO DE MEMÓRIA QUE VOCÊ RESERVA E PODE GUARDAR O QUE QUISER LÁ DENTRO
 3 MANEIRAS DE CRIAR VARIAVEIS
 1. VAR = JEITO ANTIGO - NÃO RECOMENDADO
 2. LET = PODE ALTERAR O VALOR DEPOIS
 3. CONST = CONSTANTE - NÃO PODE ALTERAR O VALOR DEPOIS
 
    CONST É UMA VARIAVEL QUE NÃO PODE SER ALTERADA
    LET É UMA VARIAVEL QUE PODE SER ALTERADA
    VAR É UMA VARIAVEL QUE PODE SER ALTERADA E É GLOBAL
    LET E CONST SÃO LOCAIS, SÓ FUNCIONAM DENTRO DO BLOCO ONDE FORAM CRIADAS

    FUNÇÕES:
     UM TRECHO DE CÓDIGO QUE, SÓ É EXECUTADO QUANDO CHAMADO
 
    */

const form = document.querySelector(".formulario")
const mascara = document.querySelector(".mascara-formulario")

function mostrarForm() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function fecharForm() {
    form.style.left = "-300%"
    form.style.transform = "translateX(0%)"
    mascara.style.visibility = "hidden"
}