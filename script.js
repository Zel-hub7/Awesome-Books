

let bookCollection = [];
const form = document.getElementById("add-book-form");

function saveFormData() {
  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;

  localStorage.setItem("title", title);
  localStorage.setItem("author", author);
}
function addBook(event) {
  event.preventDefault();
  saveFormData();
  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var books = {title, author};
  bookCollection.push(books);
  console.log(bookCollection);
  document.getElementById("books-container").innerHTML = "title " + title + " author " + author;
  var list = document.getElementById("myList");

  for (var i = 0; i < bookCollection.length; i++) {
    var listItem = document.createElement("p");
    listItem.textContent = bookCollection[i];
    list.appendChild(listItem);
  }
 
}

function renderBook() {
 

}
form.addEventListener("submit", addBook);

window.addEventListener("load", function() {
  
  document.getElementById("books-container").innerHTML = "Title: " + localStorage.getItem("title") + "<br>Author: " + localStorage.getItem("author");
});
