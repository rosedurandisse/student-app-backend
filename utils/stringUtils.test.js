const {
  repeatNTimesWithSpace,
  capitalizeFirstLetter,
} = require("./stringUtils");

describe("Take a string and number and repeat string same number of times, seperated with spaces", () => {
  it("handles an empty string", () => {
    expect(repeatNTimesWithSpace("", 0)).toBe("");
    expect(repeatNTimesWithSpace("", 5)).toBe("");
  });

  it("handles a string with 1 or more characters", () => {
    expect(repeatNTimesWithSpace("a", 1)).toBe("a");
    expect(repeatNTimesWithSpace("a", 5)).toBe("a a a a a");
    expect(repeatNTimesWithSpace("abc", 5)).toBe("abc abc abc abc abc");
  });
});

describe("Take a string and return the string with the first letter capitalized", () => {
  it("handles a string with multiple names, indicated by space, capitalizes the first letter of each part of the name", () => {
    expect(capitalizeFirstLetter("ferris bueller")).toBe("Ferris Bueller");
    expect(capitalizeFirstLetter("b. bailey")).toBe("B. Bailey");
  });

  it("handles a string with one name", () => {
    expect(capitalizeFirstLetter("madonna")).toBe("Madonna");
    expect(capitalizeFirstLetter("eve")).toBe("Eve");
  });

  it("handles an empty string", () => {
    expect(capitalizeFirstLetter("")).toBe("");
  });
});
