// comentário de uma linha

/* 
  comentário em bloco
*/

// váriaveis
// var -> não usa no dia o dia
let nome = "Rhayner";
let idade = 22;

// nome = 'teste'
// idade = 22; não é possivel reatribuir uma constante

// Operadores aritmeticos
const soma = 2 + 2
const substracao = 2 - 2
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

const frutas = ["Maçã", "Banana", "Uva"]
console.log(frutas[0])
console.log(frutas[1])

console.log("Quantas frutas tem no array?")
console.log(frutas.length)

frutas.push("Laranja")
console.log("E agora, quantas frutas tem no array?")
console.log(frutas.length)

frutas.forEach(fruta => console.log(fruta))

frutas.pop()
console.log(frutas)

    // Objetos
    let pessoa = {
        nome: "Rhayner",
        idade: 22,
        peso: 90,
        altura: 180
    }

    console.log(pessoa.nome)
    pessoa.idade = 40
    console.log(pessoa.idade)

    // Desatribuição de Objetos
    const { peso, altura } = pessoa
    console.log(peso)
    console.log(altura)

    // Propagação de Objeto
    const endereco = {
        cidade: "Brasília",
        uf: "DF"
    }

    const pessoaCompleto = {
        ...pessoa,
        ...endereco
    }

    console.log(pessoaCompleto)

    // Funções

    function somar(numA, numB) {
        const resultado = numA + numB
        console.log(resultado)
    }

    //Uso
    somar(2,2)
    somar(3,3)
    somar(10,5)

    // Função Anônima
    const subtrair = function (numA, numB){
        const resultado = numA - numB
        console.log(resultado)
    }

    subtrair(4,2)

    //Arrow Function
    const multiplicar = (numA, numB) => numA * numB
    multiplicar(2,2)

    // importar uma função de outro arquivo

    // No padrão do node sem projeto não funciona
    // o import por modulos, tem que utilizar o module.exports
    // Mas esse formato é o que vamos utilizar nos projetos
    import { calcularIMC } from "./CalculadoraIMC"

    // Modo de import padrão no node
    // const calculadoraIMC = require("./CalculadoraIMC")

    const res = calcularIMC(80, 170)

    console.log(res)