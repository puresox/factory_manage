const Datastore = require('nedb');
const {
    ipcRenderer
} = require('electron')

const db = new Datastore({
    filename: '/db/score1',
    autoload: true
});
$(document).ready(() => {
    $('#save').click(() => {
        const year = $("#year").val();
        const month = $("#month").val();
        const A = $("#A").text();
        const B = $("#B").text();
        const C = $("#C").text();
        const D = $("#D").text();
        const E = $("#E").text();
        const data = {
            year: year,
            month: month,
            A: A,
            B: B,
            C: C,
            D: D,
            E: E,
        };
        db.insert(data, (err, newDoc) => {
            ipcRenderer.send('save-message', data)
        });
    });
});
/*ipcRenderer.on('save-reply', (event, arg) => {
    alert(arg);
});*/