
const formulario = document.querySelector("form")

const name = document.querySelector(".nome");
const email= document.querySelector(".email");
const phone = document.querySelector(".phone");
const modalidade = document.querySelector(".modalidade");
const cidade = document.querySelector(".cidade");

function cadastrar (){

fetch("http://localhost:8080/users",

{

    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    method : "POST",
    body: JSON. stringify({
        name: name.value,
        email: email.value,
        phone: phone.value,
        modalidade: modalidade.value,
        cidade : cidade.value
    
    })
})
.then(function(res){ console.log(res)})
.catch(function(res){ console.log(res)})
window.alert("cadastro feito com sucesso");

};

function limpar (){
    name.value = "";
    email.value = "";
    phone.value = "";
    modalidade.value = "";
    cidade.value = "";

} 
       

  formulario.addEventListener('submit', function (even){
    even.preventDefault();

    cadastrar();
    limpar();
   
})

    










