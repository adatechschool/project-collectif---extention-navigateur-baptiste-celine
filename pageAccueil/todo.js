let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
focusMethod = function getFocus() {
     inputField.focus();
   }

addToDoButton.addEventListener('click', function(){
     var paragraph = document.createElement('p');
     paragraph.classList.add('paragraph-styling');
     paragraph.innerText = inputField.value
     toDoContainer.appendChild(paragraph);
     inputField.value = "";
     focusMethod();
     paragraph.addEventListener('click', function(){
          paragraph.style.textDecoration = "line-through";
          paragraph.style.color = "grey";
     })
     paragraph.addEventListener('dblclick', function(){
           toDoContainer.removeChild(paragraph);
     })
});