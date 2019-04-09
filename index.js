/**
 * @author Miguel Angel <mtorres@cittus.com>
 *
 */

/**
 * Start Process
 */
// Variables Main
let flag = 0;
// Variables Main
let pathWeb = 'https://ivs.cittis.com.co/isv/source/controller/Reportes/creararchivo.php';
let pathAutocad = "notepad";//"D:\\Softwares\\IDES\\AutoCad 2019 (Portable)\\AutoCAD 2019 - English.exe";

const library = require('child_process');
const exec = library.exec;
const execFile = library.execFile;


try {
    check();
} catch (e) {
    process.on('exit', function (e) {
        return console.log(e);
    });
}


function check() {

    isRunning(pathAutocad).then((status) => {
        console.log(status);
        if (!status && flag == 0) {
            flag++;
            execute(pathAutocad)
        } else {
            flag = -1;
            initProcess();
        }
    });

}

function initProcess() {
    (async (url) => {
        // Clean
        process.stdout.write('\033c');
        // Add Library
        var automationSCR = require('./AutomationSCR');
        // New Document
        var output = automationSCR.newDocument();
        // Init Process
        var output = automationSCR.start(url);
    })(pathWeb);
}


function execute(fileName, params, path) {
    /*let promise = new Promise((resolve, reject) => {
        execFile(fileName, params, { cwd: path }, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });

    });
    return promise;*/

    // Check Promise -> Then
    const robotTemp = require("robotjs");
    robotTemp.keyTap("r", ["command"]);
    robotTemp.typeString(fileName);
    robotTemp.keyTap("enter");
}


function isRunning(win, mac, linux) {
    return new Promise(function (resolve, reject) {
        const plat = process.platform;
        const cmd = plat == 'win32' ? 'tasklist' : (plat == 'darwin' ? 'ps -ax | grep ' + mac : (plat == 'linux' ? 'ps -A' : ''));
        const proc = plat == 'win32' ? win : (plat == 'darwin' ? mac : (plat == 'linux' ? linux : ''));
        if (cmd === '' || proc === '') {
            resolve(false)
        }
        exec(cmd, function (err, stdout, stderr) {
            resolve(stdout.toLowerCase().indexOf(proc.toLowerCase()) > -1)
        })
    })
}