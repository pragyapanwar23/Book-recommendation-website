const books = [
    { 
        title: "To Kill a Mockingbird", 
        author: "Harper Lee",
        description: "Set in the fictional town of Maycomb, Alabama, during the Great Depression, this novel explores themes of racial injustice and moral growth through the eyes of young Scout Finch." 
    },
    { 
        title: "1984", 
        author: "George Orwell",
        description: "A dystopian novel set in a totalitarian regime where the government, led by the all-seeing Big Brother, exercises complete control over its citizens' lives, thoughts, and actions." 
    },
    { 
        title: "The Great Gatsby", 
        author: "F. Scott Fitzgerald",
        description: "This classic American novel depicts the extravagant lifestyle and moral decay of the wealthy elite in 1920s Long Island, as seen through the eyes of narrator Nick Carraway." 
    },
    { 
        title: "Pride and Prejudice", 
        author: "Jane Austen",
        description: "A romantic novel set in rural England, it follows the emotional journey of Elizabeth Bennet as she navigates issues of class, marriage, and societal expectations." 
    },
    { 
        title: "Moby-Dick", 
        author: "Herman Melville",
        description: "A sprawling epic of obsession and revenge, this novel follows the voyage of the Pequod and its crew, led by the vengeful Captain Ahab, in pursuit of the elusive white whale, Moby Dick." 
    }
];

function displayBooks() {
    const classicsBooks = document.getElementById("classicsBooks");

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

        classicsBooks.appendChild(bookItem);
    });
}

window.onload = displayBooks;
