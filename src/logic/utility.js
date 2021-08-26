import { CARD_RANK, CARD_SUIT, CARD_SUIT_COLOR } from "./constants";

export const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const getRandomCampaignKey = () => {
  var result = [];
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (var i = 0; i < 4; i++) {
    result.push(
      characters.charAt(Math.floor(Math.random() * characters.length))
    );
  }
  return result.join("");
};

export const cursorPositionPx2Pct = (x, y, viewport) => {
  return {
    x: (x * 100) / viewport.width,
    y: (y * 100) / viewport.height,
  };
};

export const cursorXPctToPx = (x, viewport) => {
  return (x * viewport.width) / 100;
};

export const cursorYPctToPx = (y, viewport) => {
  return (y * viewport.height) / 100;
};

export const getNewShuffledDeck = (y, viewport) => {
  const deck = [];

  Object.values(CARD_SUIT_COLOR).forEach((deckColor) => {
    deck.push({
      rank: CARD_RANK.JOKER,
      deckColor,
    });
    deck.push({
      rank: CARD_RANK.JOKER,
      deckColor,
    });
    Object.values(CARD_SUIT).forEach((suit) => {
      Object.values(CARD_RANK).forEach((rank) => {
        if (rank === CARD_RANK.JOKER) return;
        deck.push({
          suit,
          rank,
          color: getColorFromSuit(suit),
          deckColor,
        });
      });
    });
  });

  console.log(deck);

  return shuffle(deck);
};

function getColorFromSuit(suit) {
  if (suit === CARD_SUIT.DIAMOND || suit === CARD_SUIT.HEART)
    return CARD_SUIT_COLOR.RED;
  return CARD_SUIT_COLOR.BLACK;
}

function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
