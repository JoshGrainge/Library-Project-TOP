const bookContainer = document.querySelector(".book-container");

const submitBtn = document.querySelector(".submit-btn");
const addBookBtn = document.querySelector(".add-book-btn");

const modalContainer = document.querySelector(".modal-cotainer");
const modal = document.querySelector(".modal");

let myLibrary = [];

// Auto populate array for testing
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

// Override submit button functionality
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const haveRead = document.getElementById("have-read").value;

  document.getElementById("add-book-form").reset();

  addBookToLibrary(title, author, pages, haveRead == "on");
  updateBooks();
});

// Add event listeners
submitBtn.addEventListener("click", toggleModal);
addBookBtn.addEventListener("click", toggleModal);

function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}

function addBookToLibrary(title, author, pages, haveRead) {
  myLibrary.push(new Book(title, author, pages, haveRead));
}

function removeBookFromLibrary(index) {
  myLibrary.splice(index, 1);
  updateBooks();
}

function createBookCard(bookIndex) {
  const cardContainer = document.createElement("div");
  const removeButton = document.createElement("button");
  const title = document.createElement("p");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const readLabel = document.createElement("p");
  const readToggle = document.createElement("input");

  removeButton.addEventListener("click", () => {
    const id = removeButton.parentElement.getAttribute("data-id");
    removeBookFromLibrary(id);
  });

  readToggle.addEventListener("change", (e) => {
    const id = removeButton.parentElement.getAttribute("data-id");
    myLibrary[id].haveRead = e.target.checked;
  });

  cardContainer.dataset.id = bookIndex;
  readToggle.type = "checkbox";

  cardContainer.classList.add("card-container");
  removeButton.classList.add("remove-btn");
  title.classList.add("book-title");
  author.classList.add("author-title");
  pages.classList.add("pages");

  removeButton.textContent = "X";
  title.textContent = myLibrary[bookIndex].title;
  author.textContent = myLibrary[bookIndex].author;
  pages.textContent = myLibrary[bookIndex].pages;
  readLabel.textContent = "Have read book: ";
  readToggle.checked = myLibrary[bookIndex].haveRead;

  cardContainer.appendChild(removeButton);
  cardContainer.appendChild(title);
  cardContainer.appendChild(author);
  cardContainer.appendChild(pages);
  readLabel.appendChild(readToggle);
  cardContainer.appendChild(readLabel);

  bookContainer.appendChild(cardContainer);
}

function updateBooks() {
  bookContainer.textContent = "";
  for (let i = 0; i < myLibrary.length; i++) {
    createBookCard(i);
  }
}

function toggleModal() {
  if (modal.classList.contains("active")) {
    modalContainer.classList.remove("active");
    modal.classList.remove("active");
  } else {
    modalContainer.classList.add("active");
    modal.classList.add("active");
  }
}
