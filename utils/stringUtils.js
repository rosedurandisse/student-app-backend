function repeatNTimesWithSpace(string, n) {
  if (!string) return "";
  if (n === 1) {
    return string;
  }

  //   return new Array(n).fill(string).join(" ");

  return (string + " ").repeat(n).trim();
}

const capitalizeFirstLetter = (string) => {
  if (!string) {
    return "";
  }

  return string
    .split(" ")
    .map((eachElement) => {
      return eachElement[0].toUpperCase() + eachElement.slice(1);
    })
    .join(" ");

  //   return string[0].toUpperCase() + string.slice(1);
};

module.exports = { capitalizeFirstLetter, repeatNTimesWithSpace };
