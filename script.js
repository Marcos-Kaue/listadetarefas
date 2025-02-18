document.getElementById("tarefa").addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        adicionarTarefa();
    }
});

function adicionarTarefa(){
    let input = document.getElementById("tarefa");
    let texto = input.value.trim();
        if(texto !== ""){
        let lista = document.getElementById("lista");
        let item = document.createElement("li");
        item.classList.add("lista-adicionada");
        item.innerHTML = `${texto} <button onclick="concluirTarefa(this)">✔️</button> <button onclick="removerTarefa(this)">❌</button>`;
        lista.appendChild(item);
        input.value = "";
        }
    }
    
function concluirTarefa(botao) {
        let item = botao.parentElement;
        item.classList.add("lista-concluidas");
        item.classList.remove("lista-adicionada");
        item.classList.add("lista-concluidas");
        document.getElementById("lista-concluidas").appendChild(item);
        botao.remove();
}

function removerTarefa(botao){
    botao.parentElement.remove();
}
