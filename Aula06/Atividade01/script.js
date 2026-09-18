function validar() {
    var usuario = document.getElementById("usuario").value; 
    
    var senha = document.getElementById("senha").value;
    

    if (usuario === "pave" && senha === "pave123") {
        
        alert("Acesso Liberado");
      
        window.location.href = "https://pt.wikipedia.org/wiki/Batman";
    } else {
        
        alert("Acesso Negado!!");
        window.location.href = "index.html";
    }
}