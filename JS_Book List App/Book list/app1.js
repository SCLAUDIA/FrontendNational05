// GET ELEMENTS
const form = document.querySelector('#book-form');
const bookTitle = document.getElementById("bookTitle");
const authorName = document.getElementById("authorName");
const isbn = document.getElementById("isbn");
// console.log(bookTitle,authorName,isbn);

// DEFINE 2 CLASSES: BOOK CLASS & UI CASS 

class Book{
    constructor(bookTitle, authorName, isbn){
        this.bookTitle = bookTitle;
        this.authorName = authorName;
        this.isbn = isbn;
    }
}

class UI{
// ADD NEW BOOK IN THE TABLE LIST
    addNewBook(book){
        const bookList = document.getElementById("bookList");
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.bookTitle}</td>
        <td>${book.authorName}</td>
        <td>${book.isbn}</td>
        <td><a href="" class="deleteBook"><i class="far fa-trash-alt"></i></a></td>
        `;
        // console.log(bookList);
        bookList.appendChild(row); 
    }
   
// SHOW ERROR OR SUCCESS MESSAGE
    showErrorOrSuccess(message, className){

             // CREATE NEW DIV FOR ERROR OR SUCCESS MESSAGE
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        container.insertBefore(div,form);

             // SETTING TIME-OUT FOR DIV MESSAGE
        setTimeout(()=>{
            document.querySelector('.alert').remove();
        },1000);
    }

// DELETE BOOK FROM TABLE LIST
    deleteBook(target) {
        if(target.className === "deleteBook"){
            target.parentElement.parentElement.remove();
        }        
    }

// CLEAR FIELDS
    clearFields(){
    document.getElementById("bookTitle").value='';
    document.getElementById("authorName").value='';
    document.getElementById("isbn").value='';
    }  
}

// EVENTS
    // EVENT LISTENING FOR ADDING A NEW BOOK IN TABLE LIST
    document.getElementById("submitbutton").addEventListener("click", (e) => {
    e.preventDefault();
    const bookTitle = document.getElementById("bookTitle").value;
    const authorName = document.getElementById("authorName").value;
    const isbn = document.getElementById("isbn").value;
    const book = new Book (bookTitle, authorName, isbn);
    let ui = new UI();
    // console.log(book);

    if (bookTitle ==='' || authorName ==='' || isbn ===''){
        ui.showErrorOrSuccess('Please fill all the fields!','error');
        }else{
        ui.addNewBook(book);
        ui.showErrorOrSuccess('Book added successfully!', 'success');
        ui.clearFields();
    }  
})

// EVENT LISTENING FOR DELETING BOOK FROM TABLE LIST
document.getElementById("bookList").addEventListener("click", (e) =>{
    e.preventDefault();
    const ui = new UI();
    ui.deleteBook(e.target.parentNode);
    ui.showErrorOrSuccess("Book removed from list!", "success");   
})

