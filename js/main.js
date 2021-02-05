function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
var slideIndex = 2;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

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
var sliderObj = {};

function scrollWin(max, id, numOfItemShow) {
    var widthValue = document.getElementById("img-slider").offsetWidth + 20
    sliderObj[id] = sliderObj[id] || 0
    if (sliderObj[id] == max * widthValue - (widthValue * numOfItemShow))
        return;
    sliderObj[id] += widthValue;

    var elm = document.getElementById(id);
    elm.style.transform = "translate3d(" + sliderObj[id] + "px, 0px, 0)";
}

function scrollRev(max, id, numOfItemShow) {
    var widthValue = document.getElementById("img-slider").offsetWidth + 20
    sliderObj[id] = sliderObj[id] || 0
    if (sliderObj[id] == 0)
        return;
    sliderObj[id] -= widthValue;
    var elm = document.getElementById(id);
    elm.style.transform = "translate3d(" + sliderObj[id] + "px, 0px, 0)";
}

function openRightMenu() {
    document.getElementById("rightMenu").style.display = "block";
}

function closeRightMenu() {
    document.getElementById("rightMenu").style.display = "none";
}