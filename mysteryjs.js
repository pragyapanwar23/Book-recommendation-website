const books = [
    { 
        title: "The Girl with the Dragon Tattoo", 
        author: "Stieg Larsson",
        description: "The first book in the Millennium series, it follows journalist Mikael Blomkvist and hacker Lisbeth Salander as they investigate the disappearance of a young woman and uncover dark secrets in Sweden's elite society." 
    },
    { 
        title: "Gone Girl", 
        author: "Gillian Flynn",
        description: "A psychological thriller that follows the mysterious disappearance of Amy Dunne and the ensuing media frenzy, as her husband Nick becomes the prime suspect in her disappearance." 
    },
    { 
        title: "The Da Vinci Code", 
        author: "Dan Brown",
        description: "A thriller that follows symbologist Robert Langdon and cryptologist Sophie Neveu as they uncover a conspiracy involving the Catholic Church, secret societies, and hidden messages in the works of Leonardo da Vinci." 
    },
    { 
        title: "The Hound of the Baskervilles", 
        author: "Arthur Conan Doyle",
        description: "A Sherlock Holmes mystery novel, it follows Holmes and Dr. Watson as they investigate the curse of the Baskerville family and the supernatural hound that haunts their estate on the moors of Devonshire." 
    },
    { 
        title: "And Then There Were None", 
        author: "Agatha Christie",
        description: "A classic murder mystery novel, it follows ten strangers who are lured to a remote island under false pretenses and are killed off one by one, mirroring a nursery rhyme." 
    }
];

function displayBooks() {
    const mysteryBooks = document.getElementById("mysteryBooks");

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

        mysteryBooks.appendChild(bookItem);
    });
}

window.onload = displayBooks;
