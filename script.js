let tarefa = document.getElementById('texto-tarefa');
let onbutton = document.getElementById('criar-tarefa');

onbutton.addEventListener('click', function() {

  let keepLi = tarefa.value;
  console.log(keepLi);
  let newItem = document.createElement('li');
  newItem.innerText = keepLi;
  console.log(newItem);
  let list = document.getElementById('lista-tarefas');
  list.appendChild(newItem);
  tarefa.value = '';
})
