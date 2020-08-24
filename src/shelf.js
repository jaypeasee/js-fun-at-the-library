function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
}

function unshelfBook(bookTitle, shelfOfBooks) {
  for (var i = 0; i < shelfOfBooks.length; i++) {
    if (shelfOfBooks[i].title === bookTitle) {
      shelfOfBooks.splice(i, 1);
    }
  }
}

function listTitles(booksOnShelf) {
  var bookTitles = [];
  for (var i = 0; i < booksOnShelf.length; i++) {
    bookTitles.push(booksOnShelf[i].title);
  }
  return bookTitles.join(', ');
}

function searchShelf(bookShelf, titleOfBook) {
  for (var i = 0; i < bookShelf.length; i++) {
    if (bookShelf[i].title === titleOfBook) {
      return true;
    }
  }
  return false;
}


module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
