function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(charName, charAge, charPronouns) {
  var mainChar = { name: charName, age: charAge, pronouns: charPronouns };
  return mainChar;
}

function saveReview(review, reviewsCollection) {
  if (!reviewsCollection.includes(review)) {
    reviewsCollection.push(review);
  }
}

function calculatePageCount(titleOfBook) {
  return titleOfBook.length * 20;
}

function writeBook(theTitle, theChar, theGenre) {
  var newBook = {
    title: theTitle,
    mainCharacter: theChar,
    pageCount: calculatePageCount(theTitle),
    genre: theGenre
  };
  return newBook;
}

function editBook(unabridged) {
  unabridged.pageCount = unabridged.pageCount * .75;
}


module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
