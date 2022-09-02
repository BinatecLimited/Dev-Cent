function showTime() {
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM"
    
    if (h >= 12) {
        h = h - 12;
        let session = "PM"
    }

    if (h == 0) {
        h = 12;
    }

    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s

    // let time = h + ":" + m + ":" + s + " " + session;
    let newTime = `<div class="timeContainer"><p class="glass">${h}</p><p> : </p><p class="glass">${m}</p><p> : </p><p class="glass">${s}</p><p class="session"> ${session}</p></div>`
    document.getElementById("myClockDisplay").innerHTML = newTime;

    setTimeout(showTime, 1000);
}

showTime()