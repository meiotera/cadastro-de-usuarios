function cadastrar(){
    let inNome = document.getElementById('inNome');
    let inPass = document.getElementById('inPass');
    let inConfirmePass = document.getElementById('inConfirmePass').value;

    let nome = inNome.value;
    let password = inPass.value;

    if (nome === ''){
        alert('Informe um nome de Usuário');
        inNome.focus();
        return;
    }

}
let btCadastrar = document.getElementById('btCadastrar');
btCadastrar.addEventListener('click', cadastrar)