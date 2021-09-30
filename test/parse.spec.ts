import { parse } from "../src/parser";

describe("parser", () => {
  describe("var_assign", () => {
    it("should parse a var_assign with a number", () => {
      const results = parse("foo = 1");
      expect(results[0].type).toBe("var_assign");
      expect(results[0].var_name.value).toBe("foo");
    });
  });
});
