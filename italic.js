import { Parser } from "./index.js";

export class Italic  {
    static italic(regex, block) {
        let output;
        if(block === true) {
            const parse = new Parser(regex[2], false);
            let result = parse.parse();
            console.log(regex);
            // output = "<i>"+result+"</i>";  

        } else {
            output = "<i>"+regex[2]+"</i>";          
        }

        return output;
    }
}
