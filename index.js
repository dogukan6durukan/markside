import { RULES } from "./rules.js";
import { H } from "./h.js";
import { Italic } from "./italic.js";

export class Parser {
  constructor(src, block) {
    this.src = src;
    this.block = block;
  }

  parse() {
    const srcLines = this.src.trim().split("\n");
    const rules = this.block ? RULES.BLOCK_RULES : RULES.INLINE_RULES;
    const output = [];

    for (let el of srcLines) {
      el = el.trim(); // baştaki boşlukları at
      let result;

      if (rules.h && rules.h.test(el)) {
        const match = el.match(rules.h);
        result = H.parseH(match, this.block);
      } else if (rules.italic && rules.italic.test(el)) {
        const match = el.match(rules.italic);
        result = Italic.italic(match, this.block);
      } else {
        result = el; // hiçbir kural uymadıysa satırı aynen bırak
      }

      output.push(result);
    }

    return output.join("\n");
  }
}

const src = `
    - adamsın brom ** ee
`;

const parser = new Parser(src, true);
let result = parser.parse();
console.log(result);
