// import yargs to re-use code from someone else that has already
// solved the complexities of parsing command line arguments
import yargs = require("yargs");
import { multiply } from "./calculator/multiply";

// create a new yargs "command"
yargs.command(
    
    // name the command with no spaces
    "calculate",

    // describe the command so that the --help flag is helpful
    "Multiplies Two Numbers",

    // define the parameters we need for our command
    {
        number1: {
            type: "number",
            alias: "a",
            description: "1/2 Numbers",
        },

        number2: {
            type: "number",
            alias: "b",
            description: "2/2 Numbers",
        },
    },

    // define the function we want to run once the arguments are parsed
    function (args) {
        
        console.log(`Running multiply on ${args.number1} x ${args.number2}`);

        try {
            
            const result = multiply(args.number1, args.number2);
            console.log(`Result: `, result);

        } catch (error) {
            
            console.error( error );

        }

        console.log(`Fin.`);

    }
);

// tell yargs to include the --help flag
yargs.help();

// tell yargs to parse the parameters
yargs.parse();
