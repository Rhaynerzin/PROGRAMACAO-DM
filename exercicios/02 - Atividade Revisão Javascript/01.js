//1 

let nome = "Rhayner"
let maiusculas = nome.toUpperCase();
console.log(nome)
console.log(maiusculas)

//2

let minusculas = nome.toLowerCase();
console.log(minusculas)

//3

function inverterString(str) {
    let arr = str.split('');
    arr.reverse();
    let stringInvertida = arr.join('');
    return stringInvertida;
  }
  
  const minhaString = "Rhayner";
  const stringInvertida = inverterString(minhaString);
  console.log(stringInvertida);

  //4

  let substituir = nome.replace("R", "D");
let substituir1 = nome.replace("h", "e");
let substituir2 = nome.replace("a", "s");
let substituir3 = nome.replace("y", "m");
let substituir4 = nome.replace("n", "o");
let substituir5 = nome.replace("e", "n");
let substituir6 = nome.replace("r", "d");
console.log(substituir)
console.log(substituir1)
console.log(substituir2)
console.log(substituir3)
console.log(substituir4)
console.log(substituir5)
console.log(substituir6)