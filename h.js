export class H {

    static parseH(regex) {
        let output = "";
        const level = regex[1];
        if(level.length <= 6) {
            
            switch (level.length) {
                case 1:
                    output = "<h1>"+regex[2]+"<h1>";
                break;
                    
                case 2:
                    output = "<h2>"+regex[2]+"<h2>";
                break;
                case 3:
                    output = "<h3>"+regex[2]+"<h3>";
                break;
                case 4:
                    output = "<h4>"+regex[2]+"<h4>";
                break;
                case 5:
                    output = "<h5>"+regex[2]+"<h5>";
                break;
                case 6:
                    output = "<h6>"+regex[2]+"<h6>";
                break;
            }

            return output;

        } else {
            console.error("H element can't be bigger then h6!");
        }
    }

}