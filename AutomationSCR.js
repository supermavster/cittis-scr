/** Add Library */
const robot = require("robotjs"),
    fs    = require("fs"),      // Maker Files
    http  = require('http'),    // Get Content Web;
    https = require('https');   // Get Content Web;
class AutomationSCR {


    // Variables
    constructor() {
        this.dataMain = "";
        robot.setKeyboardDelay(500);
    }

    async start(url) {
        this.dataMain = await Promise.resolve(this.getScript(url));
        // Make File
        this.makeFile();
        // Open Autocad
        this.openExe();

    }

    getScript(url) {
        return new Promise((resolve, reject) => {

            let client = http;

            if (url.toString().indexOf("https") === 0) {
                client = https;
            }

            client.get(url, (resp) => {
                let data = '';

                // A chunk of data has been recieved.
                resp.on('data', (chunk) => {
                    data += chunk;
                });

                // The whole response has been received. Print out the result.
                resp.on('end', () => {
                    resolve(data);
                });

            }).on("error", (err) => {
                reject(err);
            });
        });
    };

    makeFile() {
        fs.writeFile("temp.scr", this.dataMain, function (err, data) {
            if (err) console.log(err);
            console.log("Successfully Written to File.");
        });
    }

    async newDocument() {

        // TODO: Import DWG with Values (Needed)
    }

    async openExe() {

        // Change Window
        robot.keyTap("tab", ["alt"]);

        // Max Size
        robot.keyTap("up", ["command"]);

        // Exit Actions Inside - Software
        robot.keyTap("escape");
        robot.keyTap("escape");

        // Active Command
        robot.typeString("scr");
        robot.keyTap("enter");

        // Press Documents
        // Select and Enter to Folder (0A)
        var size = (robot.getScreenSize());

        // Average Size Screens Width
        let prom = 373.33333333333333333333333333333;
        prom *= 2;

        let width = size.width;
        width -= prom;
        width = (width / 2) + 100;
        // Flag
        width = width - 100;

        // Average Size Screens
        // Height
        prom = 326.66666666666666666666666666667;

        let height = size.height;
        height += prom;
        height = (height / 3) - 10;
        // Flag
        height = height - 100;

        console.log(width + ", " + height);

        robot.moveMouse(width, height);
        robot.mouseClick();

        // Enter Folder
        robot.keyTap("tab");
        robot.keyTap("tab");
        robot.keyTap("tab");
        robot.keyTap("down");
        robot.keyTap("up");

        robot.keyTap("enter");


        // Enter File
        robot.keyTap("down");
        robot.keyTap("down");
        robot.keyTap("enter");

        /*
        robot.keyTap("down");
        robot.keyTap("enter");

        const { fork } = require('child_process');
        const n = fork(`${__dirname}/child.js`);

        n.on('message', (m) => {
            console.log('PARENT got message:', m);
        });

    // Causes the child to print: CHILD got message: { hello: 'world' }
        n.send({ hello: 'world' });


        /* Child process script - child.js * /

        process.on('message', (m) => {
            console.log('CHILD got message:', m);
        });

    // Causes the parent to print: PARENT got message: { foo: 'bar', baz: null }
        process.send({ foo: 'bar', baz: NaN });
    */

        /*
            robot.keyTap("d", ["command"]);
            robot.keyTap("r", ["command"]);
            var open = await robot.typeString(pathFile);
            if(open === 1) {
                robot.setKeyboardDelay(500);
                robot.keyTap("enter");
                // Full size
                robot.keyTap("up", ["command"]);


                robot.typeString("_new", 300);

                var size = size.get();
                var img = robot.screen.capture(0, 0, size, size);
        // Support for higher density screens.
                var multi = img.width / size;
        // Get color at 2, 3.
                var color = img.colorAt(2 * multi, 3 * multi);

            }else{
                conosle.log("no open");
            }*/
    }

}

var automationSCR = new AutomationSCR();

this.newDocument = async function () {
    automationSCR.newDocument();
    return "Make New Document DWG";
};

this.start = async function (pathWeb) {

    await automationSCR.start(pathWeb);
    return "End Process";
};