var list = document.getElementById('list');
var element = document.getElementById('addElem');

element.addEventListener('click', function() {
    var liList = list.getElementsByTagName('li')
    var newLi = document.createElement('li');
    newLi.innerHTML = "item " + liList.length
    list.appendChild(newLi);
})
