// This function is responsible for shuffling the flashcards
const shuffle = (cards) => {
  let current = cards.length;
  const newCardsArray = [...cards];

  while (current !== 0) {
    const randomIndex = Math.floor(Math.random() * current);
    current--;

    // Swap elements
    [newCardsArray[current], newCardsArray[randomIndex]] = [
      newCardsArray[randomIndex],
      newCardsArray[current],
    ];
  }

  return newCardsArray;
};

export { shuffle };
