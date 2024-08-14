const books = [
    { 
        title: "Sapiens: A Brief History of Humankind", 
        author: "Yuval Noah Harari",
        description: "A sweeping history of the human species, from the emergence of Homo sapiens in Africa to the present day, exploring key developments and revolutions that shaped human societies and cultures." 
    },
    { 
        title: "The Power of Habit: Why We Do What We Do in Life and Business", 
        author: "Charles Duhigg",
        description: "An examination of the science behind habits and how they form, offering insights into how habits can be changed to improve personal and professional lives." 
    },
    { 
        title: "Educated: A Memoir", 
        author: "Tara Westover",
        description: "A memoir detailing the author's journey from growing up in a survivalist family in rural Idaho, with no formal education, to earning a PhD from Cambridge University." 
    },
    { 
        title: "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life", 
        author: "Mark Manson",
        description: "A self-help book that challenges conventional wisdom and encourages readers to embrace discomfort and uncertainty as a path to living a more meaningful and fulfilling life." 
    },
    { 
        title: "Becoming", 
        author: "Michelle Obama",
        description: "The memoir of former First Lady Michelle Obama, chronicling her life from her childhood on the South Side of Chicago to her years in the White House, offering insights into her personal journey and experiences as a public figure." 
    }
];


function displayBooks() {
    const nonfictionBooks = document.getElementById("nonfictionBooks");

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

        nonfictionBooks.appendChild(bookItem);
    });
}

window.onload = displayBooks;
