var text = document.getElementById("int")
var btn = document.getElementById("gen")

function generate() {
    text.innerHTML = Math.round((Math.random() * 500) + 1)
}

generate()

btn.addEventListener("click", generate, false)