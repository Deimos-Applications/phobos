import { main } from "../dist/index";

describe("main", () => {
  it("should return true", () => {
    expect(main()).toBe(true);
  });
});
