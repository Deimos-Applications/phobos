import { lexer } from "../src/tokenizer";
import { Token as PhobosToken } from "../src/tokens";
import { Token } from "moo";
import each from "jest-each";

describe("tokenizer", () => {
  const tokenizeSingle = (payload: string) => lexer.reset(payload).next();
  const tokenize = (...payloads: string[]): Token[] => {
    const results: Token[] = [];
    lexer.reset(payloads.join(""));

    for (const _payload of payloads) {
      results.push(lexer.next() as Token);
    }

    return results;
  };

  describe("whitespace", () => {
    it("should tokenize a single whitespace", () => {
      const result = tokenizeSingle(" ");
      expect(result?.type).toBe(PhobosToken.WhiteSpace);
    });

    it("should tokenize a multiple whitespaces", () => {
      const result = tokenize(" ", "while", " ");
      expect(result[0]?.type).toBe(PhobosToken.WhiteSpace);
      expect(result[2]?.type).toBe(PhobosToken.WhiteSpace);
    });
  });

  describe("new line", () => {
    it("should tokenize a single new line", () => {
      const result = tokenizeSingle("\n");
      expect(result?.type).toBe(PhobosToken.NewLine);
    });

    it("should tokenize multiple new lines", () => {
      const result = tokenize("\n", "while", "\n");
      expect(result[0]?.type).toBe(PhobosToken.NewLine);
      expect(result[2]?.type).toBe(PhobosToken.NewLine);
    });
  });

  describe("comment", () => {
    it("should tokenize a single comment", () => {
      const result = tokenizeSingle("//foo");
      expect(result?.type).toBe(PhobosToken.Comment);
    });

    it("should tokenize a single comment with slash in it", () => {
      const result = tokenizeSingle("//foo//bar//foo");
      expect(result?.type).toBe(PhobosToken.Comment);
    });

    it("should tokenize multiple comments", () => {
      const result = tokenize("//foo", "\n", "// foo");
      expect(result[0]?.type).toBe(PhobosToken.Comment);
      expect(result[2]?.type).toBe(PhobosToken.Comment);
    });
  });

  describe("number", () => {
    describe("single digit numbers", () => {
      each(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]).test(
        "should tokenize %s to number",
        (n: string) => {
          expect(tokenizeSingle(n)?.type).toBe(PhobosToken.Number);
        }
      );
    });

    describe("double digit numbers", () => {
      each(["11", "22", "33", "44", "55", "66", "77", "88", "99"]).test(
        "should tokenize %s to number",
        (n: string) => {
          expect(tokenizeSingle(n)?.type).toBe(PhobosToken.Number);
        }
      );
    });

    describe("edge cases", () => {
      it("should parse 00 to number with value 0", () => {
        const result = tokenizeSingle("00");
        expect(result?.type).toBe(PhobosToken.Number);
        expect(result?.value).toBe("0");
      });

      it("should parse 000000000 to number with value 0", () => {
        const result = tokenizeSingle("000000000");
        expect(result?.type).toBe(PhobosToken.Number);
        expect(result?.value).toBe("0");
      });

      it("should parse 01 to number with value 0", () => {
        const result = tokenizeSingle("01");
        expect(result?.type).toBe(PhobosToken.Number);
        expect(result?.value).toBe("0");
      });
    });
  });

  describe("string", () => {
    it("should parse a simple string", () => {
      const result = tokenizeSingle('"foo"');
      expect(result?.type).toBe(PhobosToken.String);
      expect(result?.value).toBe(`"foo"`);
    });

    it("should parse a empty string", () => {
      const result = tokenizeSingle('""');
      expect(result?.type).toBe(PhobosToken.String);
      expect(result?.value).toBe(`""`);
    });

    it("should parse a string with white spaces", () => {
      expect(tokenizeSingle('"foo foo"')?.type).toBe(PhobosToken.String);
    });
  });

  describe("left parentheses", () => {
    it("should parse a left parentheses", () => {
      expect(tokenizeSingle("(")?.type).toBe(PhobosToken.LeftParentheses);
    });
  });

  describe("right parentheses", () => {
    it("should parse a right parentheses", () => {
      expect(tokenizeSingle(")")?.type).toBe(PhobosToken.RightParentheses);
    });
  });

  describe("keyword", () => {
    it('should parse the "for" keyword', () => {
      expect(tokenizeSingle("for")?.type).toBe(PhobosToken.Keyword);
    });

    it('should parse the "while" keyword', () => {
      expect(tokenizeSingle("while")?.type).toBe(PhobosToken.Keyword);
    });

    it('should parse the "if" keyword', () => {
      expect(tokenizeSingle("if")?.type).toBe(PhobosToken.Keyword);
    });

    it('should parse the "else" keyword', () => {
      expect(tokenizeSingle("else")?.type).toBe(PhobosToken.Keyword);
    });
  });

  describe("identifier", () => {
    it("should parse a simple identifier", () => {
      expect(tokenizeSingle("foo")?.type).toBe(PhobosToken.Identifier);
    });

    it("should parse an identifier with numbers in it", () => {
      expect(tokenizeSingle("foo1")?.type).toBe(PhobosToken.Identifier);
      expect(tokenizeSingle("foo99999999999")?.type).toBe(
        PhobosToken.Identifier
      );
    });

    it("should parse identifiers with underscores", () => {
      expect(tokenizeSingle("foo_foo")?.type).toBe(PhobosToken.Identifier);
      expect(tokenizeSingle("foo__bar")?.type).toBe(PhobosToken.Identifier);
    });

    it("should reject invalid identifiers", () => {
      expect(tokenizeSingle("9foo")?.type).not.toBe(PhobosToken.Identifier);
    });
  });

  describe("assign", () => {
    it("should parse the assign operator", () => {
      expect(tokenizeSingle("=")?.type).toBe(PhobosToken.Assign);
    });
  });
});
