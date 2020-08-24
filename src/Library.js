function createLibrary(libName) {
  var newLibrary = {
    name: libName,
    shelves: { fantasy: [], fiction: [], nonFiction: [] }
  }
  return newLibrary;
}

function addBook(library, book) {
  return library.shelves[book.genre].push(book);
}

function checkoutBook(theLib, theBook) {
  var genres = Object.keys(theLib.shelves);
  for (var i = 0; i < genres.length; i++) {
    for (var j = 0; j < theLib.shelves[genres[i]].length; j++) {
      if (theLib.shelves[genres[i]][j].title === theBook) {
        theLib.shelves[genres[i]].splice(j, 1);
        return `You have now checked out ${theBook} from the ${theLib.name}`;
      }
    }
  }
  return `Sorry, there are currently no copies of The Fifth Season available at the ${theLib.name}`;
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
