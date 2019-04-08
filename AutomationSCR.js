/** Add Library */
const
    fs    = require("fs"),      // Maker Files
    http  = require('http'),    // Get Content Web;
    https = require('https');   // Get Content Web;
class AutomationSCR {


    // Variables
    constructor() {
        this.dataMain = "";
    }

    start(url) {
        this.dataMain = (this.getScript(url));
        // Make File
        this.makeFile();
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

}


this.start = async function (pathWeb) {

    var automationSCR = new AutomationSCR();
    await automationSCR.start(pathWeb);
    return "End Process";
}