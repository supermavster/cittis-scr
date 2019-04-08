/**
 * @author Miguel Angel <mtorres@cittus.com>
 *
 */

/**
 * Start Process
 */
const robot = require("robotjs");
// Variables Main
let data = "";
// Variables Main
let pathWeb = 'https://ivs.cittis.com.co/isv/source/controller/Reportes/creararchivo.php';
let pathAutocad = "D:\\Softwares\\IDES\\AutoCad 2019 (Portable)\\AutoCAD 2019 - English.exe";

(async (url) => {
    // Clean
    process.stdout.write('\033c');


    // Add Library
    var automationSCR = require('./AutomationSCR');
    // Init Process
    var output = automationSCR.start(url, pathAutocad);

    // Open Autocad - %ProgramFiles%/Autocad
    await openExe(pathAutocad);

})(pathWeb);


async function openExe(pathFile) {
    robot.setKeyboardDelay(500);

    // Change Window
    robot.keyTap("tab", ["alt"]);

    // Max Size
    robot.keyTap("up", ["command"]);

    // Exit Actions Inside - Software
    for (i = 0; i < 10; i++) {
        robot.keyTap("escape");
    }

    // Active Command
    robot.typeString("scr");
    robot.keyTap("enter");

    // Press Documents
    // Select and Enter to Folder (0A)
    robot.moveMouse(700, 430);
    robot.mouseClick();

    /*robot.keyTap("tab");
    robot.keyTap("tab");
    robot.keyTap("tab");
    robot.keyTap("tab");
    robot.keyTap("tab");
    robot.keyTap("tab");
    robot.keyTap("tab");
    robot.keyTap("tab");
    robot.keyTap("tab");
    robot.keyTap("tab");*/

    // Enter Folder
    robot.keyTap("tab");
    robot.keyTap("tab");
    robot.keyTap("tab");
    robot.keyTap("down");
    robot.keyTap("up");

    robot.keyTap("enter");


    // Enter File
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


try {

} catch (e) {
    process.on('exit', function (e) {
        return console.log(e);
    });
}