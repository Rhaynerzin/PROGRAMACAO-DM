// comentário de uma linha

/*
comentario em bloco
*/

// váriaveis
// var -> não usa no dia a dia
let nome = "Rhayner"
const idade = 22;

// nome = 'teste'
// idade = 22; não é possível retribuir uma constante

// Operadores
const soma = 2 + 2
const subtracao = 2 - 2
const multiplicacao = 2 * 2
const divisao = 2 / 2
const resto = 3 % 2

// Operadores de Comparação
const igual = 2 == 2
const diferente = 3 != 2
const maior = 3 > 2
const menor = 2 < 3
const maiorOuIgual = 2 >= 2
const menorOuIgual = 3 <= 2

// Estruturas condições
idade = 16;

if (idade >= 18) {
    console.log("Maior de idade")
}

if (idade >= 18) {
    console.log("Maior de idade")
} else {
    console.log("Menor de idade")
}

// Operador Ternário

const mensagem = idade >= 18 ? "Maior de Idade" : "Menor de Idade"
console.log("Mensagem -> ", mensagem)

// Arrays - Listas

const frutas = ["Maça", "Banana", "Uva"]
    console.log(frutas[0])
    console.log(frutas[1])

    console.log("Quantas frutas tem no array ?")
    console.log(frutas.length)

    frutas.push("Laranja")
    console.log("E agora, quantas frutas tem no array ?")
    console.log(frutas.length)

    frutas.forEach(fruta => console.log (fruta))

frutas.pop()
console.log(frutas)