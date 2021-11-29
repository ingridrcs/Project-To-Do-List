const tarefa = document.getElementById('texto-tarefa');
const onbutton = document.getElementById('criar-tarefa');
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
 
  newItem.addEventListener('click', function () {

    newItem.classList.add('newColor');
  
  });

  newItem.addEventListener('dblclick', risca);
});

/* REQUISITO-8 */

/* REQUISITO-9 Source: A opção do uso do Toggle eu vi através do slack e as monitorias :https://trybecourse.slack.com/archives/C02HY11SPJP/p1637708722293500
https://www.w3schools.com/jsref/event_ondblclick.asp
https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle */
function risca(event) {
  event.target.classList.toggle('completed');
}

// REQUISITO-10 - Tive muitas dúvidas em remover as 'li' da 'ol'. Consegui resolver através das monitorias e pesquisas na internet
// Source: https://www.youtube.com/watch?v=pSkaIyRAt7w
// https://pt.stackoverflow.com/questions/4605/remover-elemento-da-p%C3%A1gina-com-javascript
const botaoApagaTudo = document.querySelector('#apaga-tudo');

botaoApagaTudo.addEventListener('click', apaga);
function apaga() {
  const pai = document.querySelector('#lista-tarefas');
  pai.parentNode.removeChild(pai);
}
/* REQUISITO-11 Source:Não estava conseguindo resolver o requisito pois minha função estava apagando apenas uma 'li' por vez
ao invés de apagar todas com a classe 'completed'. Através da dúvida de um aluno durante a monitoria eu consegui resolver a questão.
Segue o Pull Request do aluno André Torres: https://github.com/tryber/sd-018-b-project-todo-list/pull/33/files
 https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild
 https://qastack.com.br/programming/5898656/check-if-an-element-contains-a-class-in-javascript */
const removerFinalizados = document.getElementById('remover-finalizados');

removerFinalizados.addEventListener('click', remover);
function remover() {
  const listaOl = document.getElementById('lista-tarefas');
  const todasLi = document.querySelectorAll('.completed');
  for (let i = 0; i < todasLi.length; i += 1) {
    listaOl.removeChild(todasLi[i]);
  }
}
