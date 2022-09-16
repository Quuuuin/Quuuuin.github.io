/**
The following function is to control the on/off of the sidebar.

*    Title: JavaScript + CSS/CSS3 + HTML 侧边栏界面设计
*    Author:Mr.Piglet
*    Date: 
*    Code version: 1.0
*    Availability: https://blog.csdn.net/qq_38931949/article/details/86747751
*/
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
/*关闭侧栏，恢复原始侧栏宽度，主体左跨度、背景透明度*/
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}


/**
The following function is to creat a slidshow. (the following section has four similar function to control two different slide shows.)

*    Title: How To Create a Slideshow
*    Author:
*    Date: 
*    Code version: 1.0
*    Availability: https://www.w3schools.com/howto/howto_js_slideshow.asp
*/
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


var slideIndex1 = 1;
showSlides1(slideIndex);

// Next/previous controls
function plusSlides1(n) {
    showSlides1(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
    var j;
    var slides1 = document.getElementsByClassName("mySlides1");
    var dots1 = document.getElementsByClassName("dot");
    if (n > slides1.length) { slideIndex1 = 1 }
    if (n < 1) { slideIndex1 = slides1.length }
    for (j = 0; j < slides1.length; j++) {
        slides1[j].style.display = "none";
    }
    for (j = 0; j < dots1.length; j++) {
        dots1[j].className = dots1[j].className.replace(" active", "");
    }
    slides1[slideIndex1 - 1].style.display = "block";
    dots1[slideIndex1 - 1].className += " active";
}


var slideIndex2 = 1;
showSlides2(slideIndex);

// Next/previous controls
function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    var k;
    var slides2 = document.getElementsByClassName("mySlides2");
    var dots2 = document.getElementsByClassName("dot");
    if (n > slides2.length) { slideIndex2 = 1 }
    if (n < 1) { slideIndex2 = slides2.length }
    for (k = 0; k < slides2.length; k++) {
        slides2[k].style.display = "none";
    }
    for (k = 0; k < dots2.length; k++) {
        dots2[k].className = dots2[k].className.replace(" active", "");
    }
    slides2[slideIndex2 - 1].style.display = "block";
    dots2[slideIndex2 - 1].className += " active";
}

var slideIndex3 = 1;
showSlides3(slideIndex);

// Next/previous controls
function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
}

// Thumbnail image controls
function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
    var l;
    var slides3 = document.getElementsByClassName("mySlides3");
    var dots3 = document.getElementsByClassName("dot");
    if (n > slides3.length) { slideIndex3 = 1 }
    if (n < 1) { slideIndex3 = slides3.length }
    for (l = 0; l < slides3.length; l++) {
        slides3[l].style.display = "none";
    }
    for (l = 0; l < dots3.length; l++) {
        dots3[l].className = dots3[l].className.replace(" active", "");
    }
    slides3[slideIndex3 - 1].style.display = "block";
    dots3[slideIndex3 - 1].className += " active";
}




function openDialog1() {
    document.getElementById('2areflection').style.display = 'block';
}
function closeDialog1() {
    document.getElementById('2areflection').style.display = 'none';
}
function openDialog2() {
    document.getElementById('2clink1').style.display = 'block';
}
function closeDialog2() {
    document.getElementById('2clink1').style.display = 'none';
}
function openDialog3() {
    document.getElementById('2clink2').style.display = 'block';
}
function closeDialog3() {
    document.getElementById('2clink2').style.display = 'none';
}
function openDialog4() {
    document.getElementById('2creflection').style.display = 'block';
}
function closeDialog4() {
    document.getElementById('2creflection').style.display = 'none';
}
function openDialog5() {
    document.getElementById('2dreflection').style.display = 'block';
}
function closeDialog5() {
    document.getElementById('2dreflection').style.display = 'none';
}
function openDialog6() {
    document.getElementById('2ereflection').style.display = 'block';
}
function closeDialog6() {
    document.getElementById('2ereflection').style.display = 'none';
}
function openDialog7() {
    document.getElementById('3reflection').style.display = 'block';
}
function closeDialog7() {
    document.getElementById('3reflection').style.display = 'none';
}

function edit1() {
    document.getElementById("homedec1").style.zIndex = 4;
}

function edit2() {
    document.getElementById("homedec2").style.zIndex = 4;
}

function return1() {
    document.getElementById("homedec1").style.zIndex = 2;
}

function return2() {
    document.getElementById("homedec2").style.zIndex = 1;
}