const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
    },
    {
      title: "Who are You?",
      author: "George Orwell",
      year: 1949,
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen", 
      year: 1813,
    },
  ];
  
  function logTitlesSorted(titles) {
    titles.sort((a, b) => a.localeCompare(b)); // Sort titles alphabetically
    console.log("Titles in alphabetical order:");
    titles.forEach(title => console.log(title));
  }
  
  function extractTitles(books, callback) {
    const titles = books.map(book => book.title);
    callback(titles);
  }
  
  extractTitles(books, logTitlesSorted);
  