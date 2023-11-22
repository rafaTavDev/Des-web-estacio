let botaoLogin = document.querySelector(".login-botao")

botaoLogin.addEventListener("click", (e) => {
    e.preventDefault()
    let email = document.querySelector(".login-email").value
    let senha = document.querySelector(".login-senha").value
    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            email: email,
            senha: senha
        })
    }).then(resp => resp.json()).then(data => {
        if(data.code === 200){
            let nomeCliente = data.usuario.nome
            document.querySelector(".login-bem-sucedido").classList.add("logado")
            document.querySelector(".texto-logado").innerHTML = `Bem vindo(a) ${nomeCliente}, seu login foi feito com sucesso!`
            document.querySelector(".login-area").classList.add("login-off")
            console.log(data)
        }else if(data.code === 300){
            document.querySelector(".login-resposta").innerHTML = "Senha Errada"
        }else{
            document.querySelector(".login-resposta").innerHTML = "Email Inválido"
        }
    })
})