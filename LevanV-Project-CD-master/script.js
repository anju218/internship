console.log("in js")
var data= {
    num: 2,
    msg: ["LenanV is hiring! Don't miss the experience of learning new",
    "Campusdrone magazine Vol-11 is going to be released tomorrow.Get ready to learn something new!!!",
    "LenanV is hiring! Don't miss the experience of learning new",
    "Campusdrone magazine Vol-10 is released today.Check it out!!!",
    "Campusdrone magazine Vol-9 was released yesterday.Go get it.",
    "LenanV is hiring! Need a UI/UX Designer",
    "Campusdrone magazine Vol-11 is going to be released tomorrow.Get ready to learn something new!!!",
    "Campusdrone magazine Vol-11 is going to be released tomorrow.Get ready to learn something new!!!"],
    role: ['Front-end engineer','UI/UX Designer'],
    id: "1"
}

for(var i=0;i<data.msg.length;i++){
    var html,newHtml;

    html='<div class="item" id="n1-%id%"><div class="item__description">%description%</div></div>';
    newHtml = html.replace('%id%', data.id);
    newHtml = newHtml.replace('%description%', data.msg[i]);
    document.querySelector(".n-content").insertAdjacentHTML('beforeend', newHtml);
}

$("#about-btn").click(function(){
    $('html,body').animate({
        scrollTop: $(".about-content").offset().top},'slow')
});

$("#contact-btn").click(function(){
    $('html,body').animate({
        scrollTop: $("#contactUs").offset().top},'slow')
});

$("#submit-btn").click(function(){
    $('html,body').animate({
        scrollTop: $("#form-content").offset().top},'slow')
});



var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000);
}

function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }