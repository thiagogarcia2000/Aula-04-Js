// let soma = 0
// let qtde_notas = 0

// while(true){
//     const nota = Number(prompt("Digite uma nota: "))
//     if(nota > 10 || nota <0){
//         break
//     }else{
//         soma += nota
//         qtde_notas++
//     }
// }

// const media = soma / qtde_notas

// if(media >= 7){
//     alert(`Aprovado com a média ${media.toFixed(1)}`)
// }else{
//     alert(`Reprovado com a média ${media.toFixed(1)}`)
// }

// for(let i = 0; i<10; i++){
//     console.log(i)
// }
// for(let i = 55; i<=97; i++){
//     if(i % 2 === 0){
//     console.log(i)
// }
// }

// const numero = Number(prompt("Digite um número:"));

// if (isNaN(numero)) {
//     alert("Por favor, digite um número válido.");
// } else {
//     console.log("Tabuada do " + numero + ":");

//     for (let i = 1; i <= 10; i++) {
//         console.log(numero + " x " + i + " = " + (numero * i));
//     }
// }

// const numero = Number(prompt("Digite um numero:"))

// for(let i = numero; i>=0; i--){
// console.log(i)
// }

// const nome = prompt("Digite seu nome:")
// const todos_os_a = "aáàãâ"
// let qtd_de_a = 0

// for(let letra of nome.toLowerCase()){
//     if(todos_os_a.includes(letra)){
//         qtd_de_a++
//     }
// }
// alert( `Seu nome tem ${qtd_de_a} letra A`)


// const palavra = prompt("Digite uma palavra: ")
// let palavra_vogais = ""
// const todas_as_vogais = "áàâãäaeiouíìõúùóò"


// for(let palavras of palavra.toLowerCase()){
//     if(!todas_as_vogais.includes(palavras)){
//         palavra_vogais+= palavras
//     }
// }
// alert(palavra_vogais)

// const palavra = prompt("Digite uma palavra:")
// const todas_as_vogais = "aáàãâeéèiíoóòõuúù"
// let qtd_de_vogais = 0

// for(let letra of palavra.toLowerCase()){
//     if(todas_as_vogais.includes(letra)){
//         qtd_de_vogais++
//     }
// }
// alert( `Seu nome tem ${qtd_de_vogais} vogais.`)

// for(let i = 1; i<=30; i++){
//     if(i % 3 === 0){
//     console.log(i)
// }
// }

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
}

function jogarParOuImpar() {
    let continuarJogo = true;
    
    while (continuarJogo) {
        const escolhaJogador = prompt("Escolha 'par' ou 'ímpar':").toLowerCase();
        
        const resultadoDado = gerarNumeroAleatorio();
        console.log(`O dado foi lançado e o resultado foi: ${resultadoDado}`);
        
        const resultadoPar = resultadoDado % 2 === 0;
        
        if ((escolhaJogador === 'par' && resultadoPar) || (escolhaJogador === 'ímpar' && !resultadoPar)) {
            console.log('Jogador ganhou!');
        } else {
            console.log('Computador ganhou!');
        }
        
        const continuar = prompt("Deseja continuar jogando? (sim/não)").toLowerCase();
        if (continuar !== 'sim') {
            continuarJogo = false;
        }
    }
    
    console.log("Obrigado por jogar!");
}

// Iniciar o jogo
jogarParOuImpar();