const books = [
    { 
        title: "The Catcher in the Rye", 
        author: "J.D. Salinger",
        description: "Narrated by the disillusioned teenager Holden Caulfield, this novel explores themes of teenage angst, alienation, and the search for authenticity in post-World War II America.", 
        image: "https://th.bing.com/th/id/OIP.SJrJBCkFxthW5BMIfUTZsgHaKV?rs=1&pid=ImgDetMain"
    },
    { 
        title: "To Kill a Mockingbird", 
        author: "Harper Lee",
        description: "Set in the fictional town of Maycomb, Alabama, during the Great Depression, this novel explores themes of racial injustice and moral growth through the eyes of young Scout Finch." 
    },
    { 
        title: "The Great Gatsby", 
        author: "F. Scott Fitzgerald",
        description: "This classic American novel depicts the extravagant lifestyle and moral decay of the wealthy elite in 1920s Long Island, as seen through the eyes of narrator Nick Carraway." 
    },
    { 
        title: "The Lord of the Rings", 
        author: "J.R.R. Tolkien",
        description: "A high fantasy epic set in the fictional world of Middle-earth, it follows the quest to destroy the One Ring, an artifact of great power, and defeat the dark lord Sauron." 
    },
    { 
        title: "The Chronicles of Narnia", 
        author: "C.S. Lewis",
        description: "A series of seven fantasy novels set in the magical land of Narnia, it follows the adventures of children who stumble upon Narnia through various means and become embroiled in epic battles between good and evil." 
    }
];

function displayBooks() {
    const fictionBooks = document.getElementById("fictionBooks");

    books.forEach(book => {
        const bookItem = document.createElement("li");

        const title = document.createElement("h1");
        title.textContent = book.title;

        const author = document.createElement("p");
        author.textContent = "By " + book.author;

        const description = document.createElement("p"); 
        description.textContent = book.description; 

        bookItem.appendChild(title);
        bookItem.appendChild(author);
        bookItem.appendChild(description); 

        fictionBooks.appendChild(bookItem);
    });
}

window.onload = displayBooks;
