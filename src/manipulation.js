export const objectToText = (data, delimiter = "") => {
  let output = "";
  Object.entries(data).map(property => {
    output +=
      "\n" +
      `${delimiter}${property[0]}: ` +
      (typeof property[1] === "object"
        ? objectToText(property[1], ` ${delimiter}`)
        : property[1]);
  });

  return output;
};
