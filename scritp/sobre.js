const button_ver_mais = document.querySelector(".plusBtn");
const gosto = document.querySelector(".curiosidade");
console.log(button_ver_mais);
button_ver_mais.addEventListener("click", () => {
  console.log("funcionar de verdade");
  gosto.classList.toggle("oculto");
  if (button_ver_mais.classList.contains("oculto")) {
    button_ver_mais.textContent = "test";
    console.log("cade minha frase");
  } else {
    button_ver_mais.textContent = "mimiza";
  }
});
