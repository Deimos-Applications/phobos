import moo from "moo";
import { Keyword } from "./keywords";
import { Token } from "./tokens";

export const lexer = moo.compile({
  [Token.WhiteSpace]: /[ \t]+/,
  [Token.NewLine]: { match: /\n/, lineBreaks: true },
  [Token.Comment]: /\/\/.*?$/,
  [Token.Number]: /0|[1-9][0-9]*/,
  [Token.String]: /"(?:\\["\\]|[^\n"\\])*"/,
  [Token.LeftParentheses]: "(",
  [Token.RightParentheses]: ")",
  [Token.Keyword]: [Keyword.For, Keyword.While, Keyword.If, Keyword.Else],
  [Token.Identifier]: /[a-zA-Z][a-zA-Z_0-9]*/,
  [Token.Assign]: "=",
});
