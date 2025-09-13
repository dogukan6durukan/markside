import { Parser } from "./index.js";

export class H {

    static parseH(regex, block) {
        
        let output = "";
        const level = regex[1];
        let starLevel = Math.min(level.length, 6);
    

        if(block === true) {
            const parse = new Parser(regex[2], false);
            let result = parse.parse();
            output = `<h${starLevel}>${result}</h${starLevel}>`;
        } else {
            output = `<h${starLevel}>${regex[2]}</h${starLevel}>`;
            
        }
            
        return output;
    }

}