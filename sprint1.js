import rLS from "readline-sync";

let lista = []

while (true) {
    let propriedadesCss = rLS.question('Qual propriedade voce gostaria de adicionar?');
    if (propriedadesCss === "sair") {
        break
    } else {
       lista.push(propriedadesCss)
       
    }  
  
}
let final = lista.sort();
console.log(final.join('\n'));
