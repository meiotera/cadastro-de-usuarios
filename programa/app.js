function cadastrar(){
    let inNome = document.getElementById('inNome');
    let inPass = document.getElementById('inPass');
    let inConfirmePass = document.getElementById('inConfirmePass');

    let nome = inNome.value;
    let pass = inPass.value;
    let confirmePass = inConfirmePass.value;

    validarDados(nome, pass, confirmePass);

    inNome.value = '';
    inPass.value = '';
    inConfirmePass.value = '';

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

    let validaNome = true;
    let validaPassword = true;
    let validaConfirmPass = true;

    if (nome === ''){
        erroNome.textContent = `Favor informar um nome de usuário`;
        validaNome = false;
    }    
    
    if (password === ''){
        erroSenha.textContent = `Favor verificar digitação`;
        validaPassword = false;
    }
    if (confirmePass !== password || confirmePass === ''){
        erroConfirmPass.textContent = 'Senhas não coincidem';
        validaConfirmPass = false
    } 

    if(!validaNome || !validaPassword || !validaConfirmPass){
        return
    }
  
    if(verificarUsuario(nome)){
        alert('Usuario ja existe');
        nome.focus();
        return;
    }

    if(localStorage.getItem('usuarios')){
        let usuario = localStorage.getItem('usuarios') + ',' + nome;

        localStorage.setItem('usuarios', usuario)

    }else {        
        localStorage.setItem('usuarios', nome);
       
    }


}


function verificarUsuario(usuarios){
    let existe = false;

    if(localStorage.getItem('usuarios')){
        let usuario = localStorage.getItem('usuarios').split(',');

        if(usuario.indexOf(usuarios.toString()) >= 0){
            existe = true;
        }
    }
    return existe;    
}
