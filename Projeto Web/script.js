let votopara=document.querySelector('.d-1-1 span');
let cargoeleitoral=document.querySelector('.d-1-2 span');
let descricao=document.querySelector('.d-1-4');
let aviso=document.querySelector('.d-2');
let removerfoto=document.querySelector('.d-1-right');
let mudarnumeros=document.querySelector('.d-1-3');




let etapaatual=1;


function votacaocomecar() {

    let votacao=novasetapas[etapaatual];

    let numerohtml=''

    votopara.style.display='none';
    cargoeleitoral.innerHTML=votacao.titulo;
    descricao.innerHTML='';
    aviso.style.display='none';
    removerfoto.innerHTML='';
    mudarnumeros.innerHTML=numerohtml
    
}


//funcao

function digitou(n) {

    alert("Digitou:"+n);
    
}

function branco() {
    alert("Voto Branco");
}

function nulo() {
    alert("Voto nulo");
}

function confirma() {
    alert("Voto confirma");
}