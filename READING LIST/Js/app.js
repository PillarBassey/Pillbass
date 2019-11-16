
var books = document.querySelectorAll('#book-list .name')

var banner = document.querySelector('#page-banner');

var bookList = document.querySelector('#book-list');

const list = document.querySelector('#book-list ul')



//deleting books from the list
var btns = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(function(btn){
    btn.addEventListener('click', function(e){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li)
    });
});


//adding book to the list
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;



//creating elements
const li = document.createElement('li');
const bookName = document.createElement('span');
const deleteBtn = document.createElement('span');



//adding content
deleteBtn.textContent = 'delete';
bookName.textContent = value;

//adding / removing classes
bookName.classList.add('name');
// bookName.classList.remove('name');
deleteBtn.classList.add('delete')


//appending to document
li.appendChild(bookName);
li.appendChild(deleteBtn);
list.appendChild(li);
});


//checkbox Event
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
        list.style.display = "none";
    } else{
        list.style.display = "initial";
    }
});




//Filtering books
const searchBar = document.querySelector('#search-books').querySelector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLocaleLowerCase().indexOf(term)!= -1){
            book.style.display = 'block';
        } else{
            book.style.display = 'none';
        }
    })
})

 