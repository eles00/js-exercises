import { objectToText } from "./manipulation";

describe("object to text", () => {
  it("should be plain object output", () => {
    expect(objectToText({ item: 1, title: "title" })).toBe(
      `item: 1
      title: title
      `
    );
  });
});
