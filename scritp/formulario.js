const buttonMsg = document.querySelector(".msg-button");
const formularioDeContato = document.querySelector(".formulario");
const inputName = document.querySelector(".inputName");
const feedback = document.querySelector(".feedback");
console.log(inputName);
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
