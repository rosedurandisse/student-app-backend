function repeatNTimesWithSpace(string, n) {
  return (string + " ").repeat(n);
}

const capitalizeFirstLetter = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

module.exports = { capitalizeFirstLetter, repeatNTimesWithSpace };
