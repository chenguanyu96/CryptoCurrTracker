const { remote, ipcRenderer } = require("electron");
const path = require('path')


const closeBtn = document.getElementById('closeBtn')

closeBtn.addEventListener("click", function(event) {
    let addWindow = remote.getCurrentWindow();
    addWindow.close()
});

const updateBtn = document.getElementById('updateBtn')
updateBtn.addEventListener("click", function(event) {
    ipcRenderer.send('update-notify-value', document.getElementById('notifyVal').value)

    var window = remote.getCurrentWindow();
    window.close()
})