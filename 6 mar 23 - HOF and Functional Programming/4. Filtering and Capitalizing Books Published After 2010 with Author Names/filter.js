// Function to capitalize the first letter of each word in a string
function capitalizeAuthorName(author) {
    return author.replace(/\b\w/g, function(char) {
      return char.toUpperCase();
    });
  }
  
  // Example list of books with authors and publication years
  const books = [
    { title: "Book 1", author: "john doe", year: 2008 },
    { title: "Book 2", author: "jane smith", year: 2012 },
    { title: "Book 3", author: "alice wonderland", year: 2005 },
    { title: "Book 4", author: "bob builder", year: 2015 },
    { title: "Book 5", author: "charlie chaplin", year: 2010 }
  ];
  
  // Filter books published after 2010 and capitalize author names
  const filteredBooks = books.filter(book => book.year > 2010)
                             .map(book => {
                               return {
                                 title: book.title,
                                 author: capitalizeAuthorName(book.author)
                               };
                             });
  
  // Output the filtered books with capitalized author names
  console.log("Books published after 2010 with capitalized authors:");
  console.log(filteredBooks);
  