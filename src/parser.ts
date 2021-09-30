import nearley from "nearley";
import grammar from "./grammar";

export const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
export const parse = (chunk: string) => {
  parser.feed(chunk);

  if (parser.results.length > 1) {
    console.log(JSON.stringify(parser.results, null, 2));
    throw "Ambiguous syntax";
  }

  return parser.results[0]; // TODO: Find a way to type the results
};
