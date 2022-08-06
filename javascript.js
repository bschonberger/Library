const addBook = document.getElementById('addBook')
const bookGrid = document.getElementById('bookGrid')
addBook.addEventListener('click', () => popUp())
const modal = document.getElementById('modal')
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById('myForm')

span.onclick = function() {
    modal.style.display = "none";
    bookGrid.style.opacity = 1
    addBook.style.opacity = 1
}
submitButton = document.getElementById('submit')
submitButton.addEventListener('click', () => submitForm())

function popUp(){
    modal.style.display = "block"
    bookGrid.style.opacity = .1
    addBook.style.opacity = .1
}

function submitForm(){
    var data = new Book()
    data.title = document.getElementById('inputTitle').value
    data.author = document.getElementById('inputAuthor').value
    data.pages = document.getElementById('inputPages').value
    if (document.getElementById('inputRead').checked == true){
        data.isRead = "yes"
    }
    else{
        data.isRead = "no"
    }
    myLibrary.push(data)
    form.reset()
    modal.style.display = "none";
    bookGrid.style.opacity = 1
    addBook.style.opacity = 1
    loadGrid()
  }




function addBookToLibrary(item,i) {
    const newBook = document.createElement('div')
    newBook.classList.add('book')
    bookGrid.appendChild(newBook)

        const newBookContent = document.createElement('div')
        newBookContent.classList.add('bookContent')
        newBook.appendChild(newBookContent)

            const newBookTop = document.createElement('div')
            newBookTop.classList.add('top')
            newBookContent.appendChild(newBookTop)

                const newBookTitle = document.createElement('div')
                newBookTitle.classList.add('bookTitle')
                newBookTitle.textContent = (item.title)
                newBookTop.appendChild(newBookTitle)

                const newBookAuthor = document.createElement('div')
                newBookAuthor.classList.add('bookAuthor')
                newBookAuthor.textContent = (item.author)
                newBookTop.appendChild(newBookAuthor)

                const newBookPages = document.createElement('div')
                newBookPages.classList.add('bookPages')
                newBookPages.textContent = (item.pages)
                newBookTop.appendChild(newBookPages)

            const newBookBottom = document.createElement('div')
            newBookBottom.classList.add('bottom')
            newBookContent.appendChild(newBookBottom)

                const newBookRead = document.createElement('button')
                newBookRead.textContent = "Read"

                if (item.isRead == "yes"){
                    newBookRead.style.backgroundColor = "lightgreen"
                }
                else{
                    newBookRead.style.backgroundColor = "red"
                }
                newBookBottom.appendChild(newBookRead)
                newBookRead.addEventListener('click', () => toggleColor(newBookRead))

                const newBookRemove = document.createElement('button')
                newBookRemove.textContent = "Remove"
                newBookRemove.id = i
                newBookBottom.appendChild(newBookRemove)
                newBookRemove.addEventListener('click', () => removeBook(i))
}

function loadGrid(){
    clearGrid()
    for (var i = 0; i<myLibrary.length;i++){
        addBookToLibrary(myLibrary[i],i)
    }
}
function clearGrid(){
    bookGrid.innerHTML = ''
}

function removeBook(i){
    myLibrary.splice(i,1)
    loadGrid()
}

function toggleColor(button){
    if (button.style.backgroundColor == "lightgreen"){
        button.style.backgroundColor = "red"
        button.textContent = "Not read"
    }
    else{
        button.style.backgroundColor = "lightgreen"
        button.textContent = "Read"
    }
}


let myLibrary = []

function Book(title,author,pages,isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}
