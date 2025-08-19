let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

const inputTarefa = document.getElementById("novaTarefa");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaTarefas = document.getElementById("listaTarefas");


function renderizarTarefas() {
  listaTarefas.innerHTML = "";

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarefa.status;
    checkbox.addEventListener("change", () => {
      tarefas[index].status = checkbox.checked;
      salvarLocalStorage();
      renderizarTarefas();
    });

    const span = document.createElement("span");
    span.textContent = tarefa.descricao;
    span.className = "descricao " + (tarefa.status ? "concluida" : "");

    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.className = "btnExcluir";
    btnExcluir.addEventListener("click", () => {
      tarefas.splice(index, 1);
      salvarLocalStorage();
      renderizarTarefas();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btnExcluir);
    listaTarefas.appendChild(li);
  });
}

function salvarLocalStorage() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}
btnAdicionar.addEventListener("click", () => {
  const descricao = inputTarefa.value.trim();
  if (descricao) {
    tarefas.push({ descricao, status: false });
    salvarLocalStorage();
    renderizarTarefas();
    inputTarefa.value = "";
  }
});

renderizarTarefas();
