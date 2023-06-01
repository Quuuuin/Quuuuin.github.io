// Guidance
document.addEventListener("readystatechange", function(event) {
    if (event.target.readyState == "interactive") {

        var drop_btn = document.querySelector("#menu-icon")
        var drop_content = document.querySelector("#menu-content")

        drop_btn.onclick = function drop() {
            drop_content.classList.toggle("show");
        }

    }
});

// Menu
document.addEventListener("readystatechange", function(event) {
    if (event.target.readyState == "interactive") {

        var drop_btn = document.querySelector("#guide-icon")
        var drop_content = document.querySelector("#guidance-content")

        drop_btn.onclick = function drop() {
            drop_content.classList.toggle("show");
        }

    }
});