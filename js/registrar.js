let botaoRegistrar = document.querySelector(".registrar-botao")

botaoRegistrar.addEventListener("click", (e) => {
    console.log("clicou")
    e.preventDefault()
    console.log("clicou dps do default")
    let nome = document.querySelector(".registrar-nome").value
    let email = document.querySelector(".registrar-email").value
    let senha = document.querySelector(".registrar-senha").value
    fetch("http://localhost:3000/registrar", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha
        })
    }).then(resp => resp.json()).then(data => {
        console.log(data)

        if(data == "Esse email já está cadastrado!"){
            document.querySelector(".pag1-registrar").style.display = "none"     
            document.querySelector(".pag2-registrar").style.display = "flex"     
            document.querySelector(".titulo-pag2-registrar").innerHTML = "Esse email já está cadastrado! Vá para a página de login pelo menu acima"     
            document.querySelector(".pag2-registrar a").innerHTML = "Login"          
        }else{
            document.querySelector(".pag1-registrar").style.display = "none"     
            document.querySelector(".pag2-registrar").style.display = "flex"     
            document.querySelector(".titulo-pag2-registrar").innerHTML = `${data[0].nome}, seu registro foi feito com sucesso, faça o login através do menu acima!`     
            document.querySelector(".pag2-registrar a").innerHTML = "Login"      
        }
    })
})