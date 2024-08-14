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
    },
    { 
        title: "Jane Eyre", 
        author: "Charlotte Brontë",
        description: "A Bildungsroman detailing the life of the titular character, Jane Eyre, as she faces hardships, finds love, and discovers her own identity in 19th-century England." 
    },
    { 
        title: "The Catcher in the Rye", 
        author: "J.D. Salinger",
        description: "Narrated by the disillusioned teenager Holden Caulfield, this novel explores themes of teenage angst, alienation, and the search for authenticity in post-World War II America." 
    },
    { 
        title: "Wuthering Heights", 
        author: "Emily Brontë",
        description: "A tale of passion, revenge, and the destructive power of love, set on the wild Yorkshire moors, this novel follows the doomed love affair between Heathcliff and Catherine Earnshaw." 
    },
    { 
        title: "The Adventures of Huckleberry Finn", 
        author: "Mark Twain",
        description: "A picaresque novel set in the American South, it follows the adventures of Huck Finn and Jim, an escaped slave, as they navigate the Mississippi River and confront issues of race, freedom, and morality." 
    },
    { 
        title: "Great Expectations", 
        author: "Charles Dickens",
        description: "A coming-of-age novel following the life of orphan Pip, it explores themes of social class, ambition, and the consequences of one's choices in Victorian England." 
    },
    { 
        title: "The Odyssey", 
        author: "Homer",
        description: "An epic poem attributed to the ancient Greek poet Homer, it recounts the adventures of the hero Odysseus as he journeys home from the Trojan War, encountering gods, monsters, and mythical creatures along the way." 
    },
    { 
        title: "Anna Karenina", 
        author: "Leo Tolstoy",
        description: "A Russian novel exploring themes of love, adultery, and societal norms, it follows the tragic story of Anna Karenina, a married aristocrat, and her doomed affair with the affluent Count Vronsky." 
    },
    { 
        title: "The Picture of Dorian Gray", 
        author: "Oscar Wilde",
        description: "A Gothic novel examining the nature of beauty, morality, and the pursuit of pleasure, it tells the story of Dorian Gray, a young man who remains eternally youthful while a portrait of him ages and reflects his moral corruption." 
    },
    { 
        title: "Crime and Punishment", 
        author: "Fyodor Dostoevsky",
        description: "A psychological thriller set in St. Petersburg, Russia, it follows the story of Rodion Raskolnikov, a destitute student who commits a murder and grapples with guilt, redemption, and the nature of evil." 
    },
    { 
        title: "The Count of Monte Cristo", 
        author: "Alexandre Dumas",
        description: "An adventure novel of betrayal, revenge, and redemption, it follows the journey of Edmond Dantès, a young sailor who is wrongfully imprisoned and seeks vengeance against those who betrayed him." 
    }
];


const bookss = [
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
        title: "The Da Vinci Code", 
        author: "Dan Brown",
        description: "A thriller that follows symbologist Robert Langdon and cryptologist Sophie Neveu as they uncover a conspiracy involving the Catholic Church, secret societies, and hidden messages in the works of Leonardo da Vinci." 
    },
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
        title: "The Hunger Games", 
        author: "Suzanne Collins",
        description: "Set in a dystopian future where children are forced to compete in a televised death match, it follows protagonist Katniss Everdeen as she fights for survival and sparks a rebellion against the oppressive Capitol." 
    },
    { 
        title: "The Alchemist", 
        author: "Paulo Coelho",
        description: "A philosophical novel about self-discovery and personal legend, it follows Santiago, a shepherd boy, as he embarks on a journey to find a hidden treasure and fulfill his destiny." 
    },
    { 
        title: "The Fault in Our Stars", 
        author: "John Green",
        description: "A contemporary romance novel that follows Hazel Grace Lancaster, a teenage girl with cancer, as she navigates love, loss, and the meaning of life with Augustus Waters, a fellow cancer patient." 
    },
    { 
        title: "The Help", 
        author: "Kathryn Stockett",
        description: "Set in 1960s Mississippi, it follows aspiring writer Skeeter Phelan as she interviews African American maids and exposes the racism and injustices they face while working for white families." 
    },
    { 
        title: "Twilight", 
        author: "Stephenie Meyer",
        description: "The first book in the Twilight Saga, it follows teenage Bella Swan as she falls in love with Edward Cullen, a vampire, and navigates the complexities of their forbidden romance." 
    },
    { 
        title: "Divergent", 
        author: "Veronica Roth",
        description: "Set in a dystopian society divided into factions based on personality traits, it follows protagonist Tris Prior as she discovers her own identity and challenges the oppressive social order." 
    },
    { 
        title: "The Chronicles of Narnia", 
        author: "C.S. Lewis",
        description: "A series of seven fantasy novels set in the magical land of Narnia, it follows the adventures of children who stumble upon Narnia through various means and become embroiled in epic battles between good and evil." 
    },
    { 
        title: "The Lord of the Rings", 
        author: "J.R.R. Tolkien",
        description: "A high fantasy epic set in the fictional world of Middle-earth, it follows the quest to destroy the One Ring, an artifact of great power, and defeat the dark lord Sauron." 
    },
    { 
        title: "The Catcher in the Rye", 
        author: "J.D. Salinger",
        description: "Narrated by the disillusioned teenager Holden Caulfield, this novel explores themes of teenage angst, alienation, and the search for authenticity in post-World War II America." 
    },
    { 
        title: "The Shining", 
        author: "Stephen King",
        description: "A psychological horror novel set in the haunted Overlook Hotel, it follows Jack Torrance and his family as they become caretakers of the hotel during the winter, only to be terrorized by its malevolent spirits." 
    },
    { 
        title: "The Silence of the Lambs", 
        author: "Thomas Harris",
        description: "A psychological thriller that follows FBI trainee Clarice Starling as she seeks the help of incarcerated cannibalistic serial killer Hannibal Lecter to catch another serial killer known as Buffalo Bill." 
    }
];



function displayBooks() {
    const bookList1 = document.getElementById("bookList1");
    const bookList2 = document.getElementById("bookList2");

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

        bookList1.appendChild(bookItem);
    });

    bookss.forEach(book => {
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

        bookList2.appendChild(bookItem);
    });
}

window.onload = displayBooks();


