let countEl = document.getElementById("count-el")
let count = 0;
function increment() {
    count += 1
    countEl.textContent = count
}

let strResult = "Previous entries: "
let resultEl = document.getElementById("result-el")
let isFirst = true

function save() {
    if (count > 0) {
        processSave()
    }
}

function processSave() {
    strResult += isFirst ? count : " - " + count
    countEl.textContent = count
    count = 0
    isFirst = false
    resultEl.textContent = strResult
}
