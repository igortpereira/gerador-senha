let sliderElement = document.querySelector("#slider"); //referencia o input range de tamanho de caracteres
let buttonElement = document.querySelector("#button");//referencia o botao de gerar senha

let sizePassword = document.querySelector("#valor");//referencia o span que indica o tamanho selecionado
let password = document.querySelector("#password");//referencia o span da senha gerada

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    navigator.clipboard.writeText(novaSenha);
    alert("Senha copiada com sucesso!");
}
