const bgButton = document.getElementById("bg-btn");
const table = document.getElementById("tab");
let state = false;

bgButton.onclick = function () {
    if (state === false) {
        document.body.style.backgroundColor = "white";
        table.style.border = "black"
        state = true;
    } else {
        document.body.style.backgroundColor = "black";
        table.style.border = "white";
        state = false;
    }
};