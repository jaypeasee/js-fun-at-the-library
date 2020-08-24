var checkoutBook = require('../src/library.js').checkoutBook;
var searchShelf = require('../src/shelf.js').searchShelf;

class Librarian {
  constructor(libName, library) {
    this.name = libName;
    this.library = library;
  }
  greetPatron(patronName, morning) {
    if (morning) {
      return `Good morning, ${patronName}!`;
    }
    return `Hello, ${patronName}!`;
  }
  findBook(bookTitle) {
    var genres = Object.keys(this.library.shelves);
    for (var i = 0; i < genres.length; i++) {
      for (var j = 0; j < this.library.shelves[genres[i]].length; j++) {
        if (this.library.shelves[genres[i]][j].title === bookTitle) {
          this.library.shelves[genres[i]].splice(j, 1);
            return `Yes, we have ${bookTitle}`;
        }
      }
    }
    return `Sorry, we do not have ${bookTitle}`;
  }

  calculateLateFee(daysLate) {
    return Math.ceil(daysLate * .25);
  }
}

module.exports = Librarian;
