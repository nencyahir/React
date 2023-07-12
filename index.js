var selectedElement, color, text, newElement, input, updatedText, update, deleteButton, editButton;
var mainDiv = document.getElementById('maindiv');

document.getElementById('add-button').onclick = () => {
  selectedElement = document.getElementById('element-select').value;
  color = document.getElementById('color-picker').value;
  text = document.getElementById('text-area').value;

  newElement = document.createElement(selectedElement);
  newElement.style.color = color;
  newElement.textContent = text;
  document.body.appendChild(newElement);

  document.getElementById('color-picker').value = '';
  document.getElementById('element-select').value = 'h1';
  document.getElementById('text-area').value = '';

  newElement.onclick = () => {
    document.body.removeChild(mainDiv);
    editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    document.body.appendChild(editButton);

    editButton.addEventListener('click', () => {
      editFun();
    });

    deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    document.body.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
      deleteFun();
    });
  };
}

function editFun() {
  input = document.createElement('input');
  input.type = 'color';
  input.value = color;
  document.body.appendChild(input);

  updatedText = document.createElement("textarea");
  updatedText.innerHTML = text;
  document.body.appendChild(updatedText);

  update = document.createElement('button');
  update.innerHTML = 'Update';
  document.body.appendChild(update);

  update.onclick = function() {
    newElement.innerHTML = updatedText.value;
    newElement.style.color = input.value;
  }
}

function deleteFun() {
  document.body.removeChild(deleteButton);
  document.body.removeChild(editButton);
  document.body.removeChild(newElement);
  document.body.appendChild(mainDiv);
  document.body.removeChild(update);
  document.body.removeChild(input);
  document.body.removeChild(updatedText);
}
