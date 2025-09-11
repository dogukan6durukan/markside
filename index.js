import { RULES } from "./rules.js";
import { H } from "./h.js";
import { Italic } from "./italic.js";


class Parser {
    constructor(src) {
        this.src = src;
    }

    parse() {
        let src = this.src.trim().split("\n");
        let regex = "";
        let result;

        for(let el of src) {
            if(regex = el.match(RULES.h)) {
                result = H.parseH(regex);
                this.src = this.src.replace(regex[0], result);
            } 
            else if(regex = el.match(RULES.italic)) {
                result = Italic.italic(regex);
                this.src = this.src.replace(regex[0], result);
                console.log(this.src);
            }
        }

    }

}

const src =
`
    vay adamim ***** selam kral naber

    aynen aynen italic - falan ya

    asaaafsaf
`;

const parser = new Parser(src);
parser.parse();