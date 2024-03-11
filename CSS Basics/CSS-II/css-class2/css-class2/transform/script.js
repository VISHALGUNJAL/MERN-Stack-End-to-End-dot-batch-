let draggedItem = null;

document.addEventListener('dragstart', function (event) {
  draggedItem = event.target;
  event.dataTransfer.setData('text/plain', ''); // Required for Firefox
});

document.addEventListener('dragover', function (event) {
  event.preventDefault();
});

document.addEventListener('drop', function (event) {
  event.preventDefault();
  if (event.target.className === 'box') {
    event.target.appendChild(draggedItem);
    draggedItem = null;
  }
});
