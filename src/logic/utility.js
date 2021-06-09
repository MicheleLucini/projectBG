export const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const getRandomGameKey = () => {
  var result = [];
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (var i = 0; i < 4; i++) {
    result.push(
      characters.charAt(Math.floor(Math.random() * characters.length))
    );
  }
  return result.join("");
};
