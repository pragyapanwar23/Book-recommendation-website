const books = [
    { 
        title: "Harry Potter and the Sorcerer's Stone", 
        author: "J.K. Rowling",
        description: "The first book in the Harry Potter series, it follows the young wizard Harry Potter as he discovers his magical heritage, attends Hogwarts School of Witchcraft and Wizardry, and confronts the dark wizard Voldemort." 
    },
    { 
        title: "The Hobbit", 
        author: "J.R.R. Tolkien",
        description: "A fantasy novel set in Middle-earth, it follows the hobbit Bilbo Baggins as he embarks on a quest with a group of dwarves to reclaim their homeland and treasure from the dragon Smaug." 
    },
    { 
        title: "A Game of Thrones", 
        author: "George R.R. Martin",
        description: "The first book in the A Song of Ice and Fire series, it introduces the complex world of Westeros, where noble families vie for power and control over the Iron Throne, while an ancient threat looms beyond the Wall." 
    },
    { 
        title: "The Name of the Wind", 
        author: "Patrick Rothfuss",
        description: "The first book in The Kingkiller Chronicle series, it follows the legendary figure Kvothe as he recounts his life story, from his humble beginnings as a talented musician to his adventures as a renowned arcanist." 
    },
    { 
        title: "Mistborn: The Final Empire", 
        author: "Brandon Sanderson",
        description: "The first book in the Mistborn series, it is set in a world where the Dark Lord has ruled for a thousand years, and follows a group of rebels led by the street urchin Vin as they plot to overthrow his tyrannical regime." 
    }
];

function displayBooks() {
    const fantasyBooks = document.getElementById("fantasyBooks");

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

        fantasyBooks.appendChild(bookItem);
    });
}

window.onload = displayBooks;
