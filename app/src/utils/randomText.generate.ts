export const generateRandomText = (
  allowNumber: boolean,
  length: number,
  uppercase: boolean
) => {
  let characters = "abcdefghijklmnopqrstuvwxyz";
  if (allowNumber) characters += "0123456789";
  if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};
