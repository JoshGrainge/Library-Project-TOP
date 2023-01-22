const bookContainer = document.querySelector(".book-container");
console.log(bookContainer);

let myLibrary = [];

addBookToLibrary(
  "Do Androids Dream of Electric Sheep?",
  "Phillip K. Dick",
  208,
  false
);

addBookToLibrary("Lord of The Rings", "J.R.R. Tolkien", 469, false);

addBookToLibrary(
  "Harry Potter and the Cursed Child",
  "J.K. Rowling",
  260,
  true
);

updateBooks();

console.log(myLibrary[0]);
console.log(myLibrary[1]);
console.log(myLibrary[2]);

function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}

function addBookToLibrary(title, author, pages, haveRead) {
  myLibrary.push(new Book(title, author, pages, haveRead));
}

function createBookCard(book) {
  const cardContainer = document.createElement("div");
  const removeButton = document.createElement("button");
  const title = document.createElement("p");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const readLabel = document.createElement("p");
  const readToggle = document.createElement("input");

  // TODO make remove button remove button
  //removeButton.addEventListener("click", removeBook());

  readToggle.type = "checkbox";

  cardContainer.classList.add("card-container");
  removeButton.classList.add("remove-btn");
  title.classList.add("book-title");
  author.classList.add("author-title");
  pages.classList.add("pages");

  removeButton.textContent = "X";
  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = book.pages;
  readLabel.textContent = "Have read book: ";
  readToggle.checked = book.haveRead;

  cardContainer.appendChild(removeButton);
  cardContainer.appendChild(title);
  cardContainer.appendChild(author);
  cardContainer.appendChild(pages);
  readLabel.appendChild(readToggle);
  cardContainer.appendChild(readLabel);

  bookContainer.appendChild(cardContainer);
}

function updateBooks() {
  for (const book of myLibrary) {
    createBookCard(book);
  }
}
