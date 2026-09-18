function cadastrar(event) {
    event.preventDefault();

    let titulo = document.getElementById("titulo").value;
    let episodios = document.getElementById("episodios").value;
    let autor = document.getElementById("autor").value;
    let descricao = document.getElementById("descricao").value;

    if (titulo == "" || episodios == "" || autor == "" || descricao == "") {
        alert("Preencha todos os campos.");
        return;
    }

    document.getElementById("mostrarTitulo").innerText = titulo;
    document.getElementById("mostrarEpisodios").innerText = episodios;
    document.getElementById("mostrarAutor").innerText = autor;
    document.getElementById("mostrarDescricao").innerText = descricao;

    document.getElementById("cadastro").style.display = "none";
    document.getElementById("sucesso").style.display = "block";
}

function novoAnime() {
    document.querySelector("form").reset();
    document.getElementById("cadastro").style.display = "block";
    document.getElementById("sucesso").style.display = "none";
}