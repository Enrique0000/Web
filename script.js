const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');


document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
  const listItem = document.createElement('li');
  const listContent = prompt('Qual conteúdo você quer registrar?');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    const listContent = prompt('Crie algum conteúdo para sua página.');
    this.textContent = listContent;
  }
}