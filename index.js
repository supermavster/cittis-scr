/**
 * @author Miguel Angel <mtorres@cittus.com>
 *
 */

/**
 * Start Process
 */
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
    var output = automationSCR.start(url);
})(pathWeb);



try{

}catch (e) {
    process.on('exit', function(e) {
        return console.log(e);
    });
}