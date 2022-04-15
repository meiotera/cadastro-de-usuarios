function cadastrar(){
    let inNome = document.getElementById('inNome');
    let inPass = document.getElementById('inPass');
    let inConfirmePass = document.getElementById('inConfirmePass').value;

    let nome = inNome.value;
    let password = inPass.value;

    verifyError(nome, password)
   
}
let btCadastrar = document.getElementById('btCadastrar');
btCadastrar.addEventListener('click', cadastrar);


// Mensagem de erro abaixo do label
function verifyError(nome,senha){
    if (nome === ''){
        const paragrafoErro = document.createElement(`p`);
        const textErro = document.createTextNode(`Digite a informacao solicitada`);
        let divAlert = document.getElementById('alert').appendChild(textErro);
  
       
    }

}