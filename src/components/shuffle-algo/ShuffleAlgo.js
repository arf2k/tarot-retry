export const FisherYatesShuffle = (CardInfo) => {
  let currentIndex = CardInfo.length,
    randNum,
    temp;
  while (--currentIndex > 0) {
    randNum = Math.floor(Math.random() * (currentIndex + 1));
    temp = CardInfo[randNum];
    CardInfo[randNum] = CardInfo[currentIndex];
    CardInfo[currentIndex] = temp;
  }
  return CardInfo;
};
