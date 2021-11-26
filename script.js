const tarefa = document.getElementById('texto-tarefa');
let onbutton = document.getElementById('criar-tarefa');
// Source:https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild
// Consegui fazer o exercício 5 e 6 e 7 em função das mentorias durante o dia do projeto 
onbutton.addEventListener('click', function () {

  const keepLi = tarefa.value;
  console.log(keepLi);
  const newItem = document.createElement('li');

  newItem.innerText = keepLi;
  console.log(newItem);
  const list = document.getElementById('lista-tarefas');
  list.appendChild(newItem);
  tarefa.value = '';
  newItem.className = 'selected';


  newItem.addEventListener('click', function () {
    newItem.style.backgroundColor = 'rgb(128, 128, 128)';
    newItem.addEventListener('dblclick', risca);
    // Tentativas do requisito 8
    // newItem.addEventListener('click', function () {
    // newItem.ad
    // newItem.style.backgroundColor = 'rgb(128, 128, 128)';
    // newItem.className='selected';

    // for(let index of listTotal) {
    // index.addEventListener('click', function(event) {
    // listLi.classList.remove('listLi')
    // event.target.classList.add('listLi');
    // offColor();
  })

  /* REQUISITO-9 Source: A opção do uso do Toggle eu vi através do slack e as monitorias :https://trybecourse.slack.com/archives/C02HY11SPJP/p1637708722293500
  https://www.w3schools.com/jsref/event_ondblclick.asp
  https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle*/
  function risca(event) {
    event.target.classList.toggle('completed');
  }
});

// REQUISITO-10 - Tive muitas dúvidas em remover as 'li' da 'ol'. Consegui resolver através das monitorias e pesquisas na internet
// Source: https://www.youtube.com/watch?v=pSkaIyRAt7w
// https://pt.stackoverflow.com/questions/4605/remover-elemento-da-p%C3%A1gina-com-javascript
let botaoApagaTudo = document.querySelector('#apaga-tudo');

botaoApagaTudo.addEventListener('click', apaga)
function apaga() {
  let pai = document.querySelector('#lista-tarefas');
  pai.parentNode.removeChild(pai);
}

// Outra opção para Requisito 7
/*function offColor() {

  let listTotal = document.getElementById('lista-tarefas').children;
  console.log(listTotal);

  for (let i = 0; i < listTotal.length; i += 1) {
    console.log(listTotal[i]);
    listTotal[i].addEventListener('click', function () {
      //listTotal[i].style.backgroundColor='rgb(128,128,128)';
      listTotal[i].classList.add('newColor');
    })

  }
}*/