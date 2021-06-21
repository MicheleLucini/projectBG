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
