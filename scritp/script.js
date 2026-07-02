// exemplos
console.log("olá mundo");
/*
variaveis dentro

var variavel;
let variavel;
const variavel; 
*/
const nome = "matheus savio";
let totalComprar = 0;
const IsActive = true;
console.log(typeof nome);
console.log(typeof IsActive);
console.log(typeof totalComprar);
// existe três tipos primitivos: number, string e booleam
const aluno1 = {
  nome: "matheus savio",
  cargo: "engenheiro de software",
  isActive: true,
  skills: ["HTML", "CSS", "JAVASCRIPT"],
};
console.log(aluno1.skills[1]);
// para acessa as propriedades de um objeto, usar "."
// para acessar os indices de um array(lista), usar "[indice= 0 ou 1 ou 2]"
// função: bloco de codigo reutilizavel

function saudacao(nome) {
  return "boa noite" + nome;
}
// funcão sem retorno, e basicamente executa algo.
// função com retorno, te da liberdade para fazer o quiser com o resultado devolvido da função

// parte do site

// fechar o feedback
// let button_close = document.querySelector(".feedback-fechar");
// button_close.addEventListener("click", (close) => {
//   feedback.innerHTML = "";
// });
