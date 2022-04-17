function cadastrar(){
    let inNome = document.getElementById('inNome');
    let inPass = document.getElementById('inPass');
    let inConfirmePass = document.getElementById('inConfirmePass');

    let nome = inNome.value;
    let pass = inPass.value;
    let confirmePass = inConfirmePass.value;

    validarDados(nome, pass, confirmePass);

}
let btCadastrar = document.getElementById('btCadastrar');
btCadastrar.addEventListener('click', cadastrar);

function validarDados(nome, password, confirmePass){

    let erroNome = document.getElementById('erroNome');
    let erroSenha = document.getElementById('erroSenha');
    let erroConfirmPass = document.getElementById('erroConfirmPass');

    // reset mensagem de erro
    erroNome.textContent = '';
    erroSenha.textContent = '';
    erroConfirmPass.textContent = '';


    if (nome === ''){
        erroNome.textContent = `Favor informar um nome de usuário`;
    }    
    if (password === ''){
        erroSenha.textContent = `Favor verificar digitação`;
    }
    if (confirmePass !== password || confirmePass === ''){
        erroConfirmPass.textContent = 'Senhas não coincidem';
    } 

    verificarUsuario(nome)

}


function verificarUsuario(usuario){
    let existe = false;

    
}
