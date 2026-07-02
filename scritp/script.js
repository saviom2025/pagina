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
const buttonMsg = document.querySelector(".msg-button");
const formularioDeContato = document.querySelector(".formulario");
const inputName = document.querySelector(".inputName");
const feedback = document.querySelector(".feedback");
console.log(inputName);
const oculto = buttonMsg;
buttonMsg.addEventListener("click", (clique) => {
  console.log("funcionar");
  formularioDeContato.classList.toggle("oculto");
  if (formularioDeContato.classList.contains("oculto")) {
    buttonMsg.textContent = "enviar mensagem";
  } else {
    buttonMsg.textContent = "cancelar envio";
  }
});
formularioDeContato.addEventListener("submit", (event) => {
  event.preventDefault();
  const nome = inputName.value;
  (alert("mensagem enviada com sucesso. " + nome + "!"),
    // const nome = inputName.value;
    // feedback.innerHTML = `
    // <div class="feedback-sucesso">
    //   <span>mensagem enviado com sucesso, <span class="name">${nome}</span>!</span>
    //   <div>
    //    <button class="feedback-fechar">
    //    x
    //    </button>
    //   </div>
    // </div>
    // `;

    // reset
    formularioDeContato.reset());
});
// fechar o feedback
// let button_close = document.querySelector(".feedback-fechar");
// button_close.addEventListener("click", (close) => {
//   feedback.innerHTML = "";
// });
// lista de skills
const skills_list = document.querySelector(".list-skills");
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "FlexBox",
  "responsividade",
  "arrow function",
  "DOM",
];

const renderizaLista = () => {
  // map serve para organizar as skills
  const skillsHTML = skills.map((skill) => {
    return `<li>${skill}</li>`;
  });
  console.log(skillsHTML);
  // o join e usando para definir como sera o espaçamento, sera com o '' ou '-'.
  skills_list.innerHTML = skillsHTML.join("");
};
//  lembra de chama a função no final
renderizaLista();
// menu interativo
const button_ver_mais = document.querySelector(".plusBtn");
