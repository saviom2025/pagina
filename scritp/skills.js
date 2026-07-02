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
