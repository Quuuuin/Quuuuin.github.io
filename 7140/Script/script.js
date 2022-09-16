/**
MEANINGFUL INTERACTION #1
A sound controller can unmute the video that default to play mutely.
*/
var close = document.getElementById("p1");
var open = document.getElementById("p2");
var myvideo = document.querySelector("#myVideo");
function soundcontroller() {
    if (myvideo.muted) {
        myvideo.muted = false;
        close.style.display = "none";
        open.style.display = "block";
    }
    else {
        myvideo.muted = true;
        close.style.display = "block";
        open.style.display = "none";
    }
}



/**
MEANINGFUL INTERACTION #2
The following functions are all used to control the appearance and closure of pop-ups
*/
//openDialog is to get the click event to set the <div> style.display="block" to make it visible
//closeDialog is to get the click event to set the <div> style.display="block" to make it unvisible
//the parameter in () is the <div> id
function openDialog0() {
    document.getElementById('ship').style.display = 'block';
    document.getElementById('fade0').style.display = 'block'
}
function closeDialog0() {
    document.getElementById('ship').style.display = 'none';
    document.getElementById('fade0').style.display = 'none'
}
function openDialog1() {
    document.getElementById('entertainment').style.display = 'block';
    document.getElementById('fade1').style.display = 'block'
}
function closeDialog1() {
    document.getElementById('entertainment').style.display = 'none';
    document.getElementById('fade1').style.display = 'none'
}
function openDialog2() {
    document.getElementById('crew').style.display = 'block';
    document.getElementById('fade2').style.display = 'block'
}
function closeDialog2() {
    document.getElementById('crew').style.display = 'none';
    document.getElementById('fade2').style.display = 'none'
}
function openDialog3() {
    document.getElementById('reservation').style.display = 'block';
    document.getElementById('fade3').style.display = 'block'
}
function closeDialog3() {
    document.getElementById('reservation').style.display = 'none';
    document.getElementById('fade3').style.display = 'none'
}
function openContent1() {
    document.getElementById('powerroom').style.display = 'block';
}
function closeContent1() {
    document.getElementById('powerroom').style.display = 'none';
}
function openContent2() {
    document.getElementById('innercircle').style.display = 'block';
}
function closeContent2() {
    document.getElementById('innercircle').style.display = 'none';
}
function openContent3() {
    document.getElementById('outercircle').style.display = 'block';
}
function closeContent3() {
    document.getElementById('outercircle').style.display = 'none';
}
function openContent4() {
    document.getElementById('bridge').style.display = 'block';
}
function closeContent4() {
    document.getElementById('bridge').style.display = 'none';
}
function openDialog() {
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block'
}
function closeDialog() {
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none'
}



/**
MEANINGFUL INTERACTION #3
The following function is to make the content of a div change when differemnmt button click.

*    Title: Change the div content when click each button
*    Author:_Pluto
*    Date: May 17, 2019
*    Code version: 1.0
*    Availability: https://www.cnblogs.com/lyxzxp/p/10881807.html
*/
// get the bottom and the content
var btns = document.getElementsByClassName("btn")
var contents = document.getElementsByClassName("content")
//iterate to set all the class name as content&btn(remove the “active” and “show") 
for (var i = 0; i < btns.length; i++) {
    btns[i].index = i;
    btns[i].onclick = function () {
        for (var j = 0; j < btns.length; j++) {
            btns[j].className = btns[j].className.replace(' active', '').trim();
            contents[j].className = contents[j].className.replace(' show', '').trim();
        }
        // add the the “active” and “show" to the buttom that onclick and its content 
        this.className = this.className + ' active';
        contents[this.index].className = contents[this.index].className + ' show';
    };
    // the active btn and the show content have different CSS set(display:block)
}




/**
MEANINGFUL INTERACTION #4
The following function is to creat a slidshow. (the following section has two similar function to control two different slide shows.)

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


/**
MEANINGFUL INTERACTION #5
The functions are to send a pop-up message using alert. 
The first one also checks whether the inputboxs are empty.
The second one also checks whether the username and password entered are legitimate.
(The username can only include letters and '_', the password no less than six digits.)
*/
function reminder() {
    var regu = "^[ ]+$";
    var re = new RegExp(regu);
    var name = document.getElementById("name").value;
    var contact = document.getElementById("contact").value;
    var textbox = document.getElementById("textbox").value;
    if ((name.length == 0) || (re.test(name))) {
        return alert("Name cannot be empty!");
    }
    if ((contact.length == 0) || (re.test(contact))) {
        return alert("Your contact cannot be empty!");
    }
    if ((textbox.length == 0) || (re.test(textbox))) {
        return alert("Text cannot be empty!");
    }
    else {
        alert("Your message has been submitted!");
    }

}

function remindoflog() {
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    var patrn = /^\w+$/
    if (patrn.test(username)) {

    }
    else {
        return alert("Username contains illegal characters！\n (username can only consist of letters or '_')");
    }

    if (password.length < 6) {
        return alert("The password is incorrect\n (the length of the correct password should be greater than 6 digits)");
    }
    else {
        alert("Login successful!");
        return closeDialog();

    }

}

function reminderofbooking() {
    alert("Your file has been uploaded and reservation has been confirmed!");
}



