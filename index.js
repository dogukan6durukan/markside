import { RULES } from "./rules.js";
import { H } from "./h.js";


class Parser {
    constructor(src) {
        this.src = src;
    }

    parse() {
        let src = this.src.trim().split("\n");
        let regex = "";

        for(let el of src) {
            if(regex = el.match(RULES.h)) {
                let a = H.parseH(regex);
                this.src = this.src.replace(regex[0], a);
            }
        }

    }

}

const src =
`
    vay adamim ***** selam kral naber

    asaaafsaf
`;

const parser = new Parser(src);
parser.parse();