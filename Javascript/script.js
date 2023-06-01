


function isInViewport(element) {
    let rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function scrollset1() {
    var headtitle = document.getElementById("headtitle1")
    var block = document.getElementById("navblock1")
    if (isInViewport(headtitle)) {
        block.style.display = "block";
    }
    else {
        block.style.display = "none";
    }
}

function scrollset2() {
    var headtitle = document.getElementById("headtitle2")
    if (isInViewport(headtitle)) {
        var block = document.getElementById("navblock2")
        block.style.display = "block";
    }
    else {
        var block = document.getElementById("navblock2")
        block.style.display = "none";
    }
}

function scrollset3() {
    var headtitle = document.getElementById("headtitle3")
    if (isInViewport(headtitle)) {
        var block = document.getElementById("navblock3")
        block.style.display = "block";
    }
    else {
        var block = document.getElementById("navblock3")
        block.style.display = "none";
    }
}

function scrollset4() {
    var headtitle = document.getElementById("headtitle4")
    if (isInViewport(headtitle)) {
        var block = document.getElementById("navblock4")
        block.style.display = "block";
    }
    else {
        var block = document.getElementById("navblock4")
        block.style.display = "none";
    }
}

function scrollset5() {
    var headtitle = document.getElementById("headtitle5")
    if (isInViewport(headtitle)) {
        var block = document.getElementById("navblock5")
        block.style.display = "block";
    }
    else {
        var block = document.getElementById("navblock5")
        block.style.display = "none";
    }
}


function openDialog() {
    document.getElementById('menu1').style.display = 'flex';
    document.getElementById('menuicon').style.display = 'none'
}


function closeDialog() {
    document.getElementById('menu1').style.display = 'none';
    document.getElementById('menuicon').style.display = 'inline-block'
}