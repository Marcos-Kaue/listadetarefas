document.getElementById("tarefa").addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        adicionarTarefa();
    }
});

function adicionarTarefa(){
    let input = document.getElementById("tarefa");
    let texto = input.value.trim();
    let categoria = document.getElementById("categoria").value;
    let horaLembrete = document.getElementById("hora-lembrete").value;
    if(texto !== ""){
        let lista = document.getElementById("lista");
        let item = document.createElement("li");
        item.classList.add("lista-adicionada");
        item.innerHTML = `${texto} <span class="categoria">${categoria}</span> <button onclick="concluirTarefa(this)">✔️</button> <button onclick="removerTarefa(this)">❌</button>`;
        lista.appendChild(item);
        input.value = "";
        atualizarContador();
        if (horaLembrete) {
            adicionarlembrete(texto, horaLembrete);
        }
    }
}

function concluirTarefa(botao) {
    let item = botao.parentElement;
    item.classList.add("lista-concluidas");
    item.classList.remove("lista-adicionada");
    document.getElementById("lista-concluidas").appendChild(item);
    botao.remove();
    atualizarContador();
}

function removerTarefa(botao){
    botao.parentElement.remove();
    atualizarContador();
}

function atualizarContador(){
    let totalTarefas = document.getElementById("lista").children.length;
    let totalConcluidas = document.getElementById("lista-concluidas").children.length;
    document.getElementById("contador-tarefas").textContent = `Tarefas: ${totalTarefas}`;
    document.getElementById("contador-concluidas").textContent = `Concluídas: ${totalConcluidas}`;
}

function adicionarlembrete(tarefa, horaLembrete){
    let [hora, minuto] = horaLembrete.split(":").map(Number);
    let agora = new Date();
    let lembrete = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate(), hora, minuto);
    let tempoRestante = lembrete - agora;
    if (tempoRestante > 0) {
        setTimeout(function(){
            alert(`Lembrete: Não esqueça de concluir a tarefa "${tarefa}"!`);
        }, tempoRestante);
    } else {
        alert("A hora do lembrete deve ser no futuro!");
    }
}

