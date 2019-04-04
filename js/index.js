
  function closePrint() {
  document.body.removeChild(this._container_);
  }
  
  function setPrint() {
    this.contentWindow._container_ = this;
    this.contentWindow.onbeforeunload = closePrint;
    this.contentWindow.onafterprint = closePrint;
    this.contentWindow.focus(); // Required for IE
    this.contentWindow.print();
  }
  
  function printPage (sURL) {
    var oHiddFrame = document.createElement("iframe");
    oHiddFrame.onload = setPrint;
    oHiddFrame.style.visibility = "hidden";
    oHiddFrame.style.position = "fixed";
    oHiddFrame.style.right = "0";
    oHiddFrame.style.bottom = "0";
    oHiddFrame.src = sURL;
    document.body.appendChild(oHiddFrame);
  }
  

// Scroll button for Homepage
$(function() {
  $('a[href*=\\#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

var mutebtn = document.getElementById("mutebtn");
var audio = document.getElementById("audio");
var icon = document.getElementById("btnicon");


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


// Select navigation button
const menuButton = document.querySelector(".navigation__btn");
// Add click event listener to menu button
menuButton.addEventListener("click", showMenu);
// Selevt navigation list
const navigationList = document.querySelector(".navigation__list");

// Toggle Navigation Menu
function showMenu() {
  menuButton.classList.toggle("navigation__btn--active");
  // navigationList.classList.toggle("navigation__list--active");
  if (menuButton.getAttribute("aria-expanded") === "false") {
    menuButton.setAttribute("aria-expanded", true);
  } else {
    menuButton.setAttribute("aria-expanded", false);
  }
}

// Select dropdown button
const dropBtn = document.querySelectorAll(".navigation__drop-btn");
console.log(typeof dropBtn);

// Set click event listener on each dropdown button
dropBtn.forEach(v => {
  v.addEventListener("click", showDropdown);
});

// Toggle dropdown items
function showDropdown(e) {
  console.log(e.target.classList);
  e.target.classList.toggle("triangle");
  if (e.target.classList.contains("more")) {
    console.log("hello");
    document
      .querySelector(".navigation__dropdown--more")
      .classList.toggle("navigation__dropdown--active");
  } else if (e.target.classList.contains("shop")) {
    document
      .querySelector(".navigation__dropdown--shop")
      .classList.toggle("navigation__dropdown--active");
  }
}


// Select all links in navigation menu
const navigationLink = document.querySelectorAll(".navigation__link");

// Set click event listener on each navigation link
navigationLink.forEach(v => {
  v.addEventListener("click", closeMenu);
});

// If a link in the navigation menu is clicked close the menu and change
// menu button shape
function closeMenu() {
  navigationList.classList.remove("navigation__list--active");
  menuButton.classList.toggle("navigation__btn--active");
  menuButton.setAttribute("aria-expanded", false);
}


const textButton = document.getElementById("Textbutton");
if ( textButton ) {
  textButton.addEventListener('click', function() {
    if(textButton === undefined) {
      textButton.unbind('click')
      console.log('undefined')
    } else {
      console.log('hovering')
    }
  })
}


// RESPONSIVE FIXED SIDE MENU 
			$(document).ready(function () {
			  $('.menuIcon').click(function () {
				  if ($('.NavigationSlideOut').css("left") == "-300px") {
					  $('.NavigationSlideOut').animate({left: '0px'}, 350);
				  } 
				  else  {
					  $('.NavigationSlideOut').animate({left: '-300px'}, 350); 
				  } 
			  });
			  $(document).click(function(){
				if($('.NavigationSlideOut').css('left') == '0px' && $('.menuIcon').hasClass('on') ) {
				  $('.NavigationSlideOut').animate({left: '-300px'}, 350);
				  $('.menuIcon').toggleClass("on");
				}
			  })
			  $('.menuIcon').click(function () {
				$(this).toggleClass("on"); 
			  }); // animation = -> x
          });
		


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(window).scroll(function() {
  var header = $(document).scrollTop();
  var headerHeight = $(".header").outerHeight();
  if (header > headerHeight) {
    $(".header").addClass("fixed")
      .css("background-color", "#232020");
  } else {
    $(".header").removeClass("fixed")
    .css("background-color", "");
  }
});

$(window).scroll(function() {
  var header = $(document).scrollTop();
  var headerHeight = $(".header").outerHeight();
  var firstSection = $("#home_section").outerHeight() - 5;
  if (header > headerHeight) {
    $(".header").addClass("fixed");
  } else {
    $(".header").removeClass("fixed");
  }
  if (header > firstSection) {
    $(".header").addClass("in-view");
  } else {
    $(".header").removeClass("in-view");
  }
});

document.getElementById('media_control_btn_toggle').addEventListener('click', function() {    
  if ( audio.muted ) {
    document.getElementById('media_off').classList.add('media_hidden')
    document.getElementById('media_on').classList.add('media_visible')
    document.getElementById('media_on').classList.remove('media_hidden')
    audio.muted = false;
  } else {
    audio.muted = true
    document.getElementById('media_on').classList.add('media_hidden')
    document.getElementById('media_off').classList.add('media_visible')
    document.getElementById('media_off').classList.remove('media_hidden')
  }
  
})

let FONT_SIZE_LEVEL_MAX = 3
let FONT_SIZE_LEVEL = 0
const SELECTOR_TO_TOGGLE_TEXT_SIZE = [
  '.slide_content_title',
  '.text > p',
]

document.getElementById('increase_font').addEventListener('click', function() {
  
  if ( FONT_SIZE_LEVEL < FONT_SIZE_LEVEL_MAX ) { 
    SELECTOR_TO_TOGGLE_TEXT_SIZE.forEach( function(cls) {
      const originalFontSize = $(cls).css('font-size');
      const originalFontNumber = parseFloat(originalFontSize, 10);
      const newFontSize = originalFontNumber*1.1;
      $(cls).css('font-size', newFontSize);
    })
    
    
    FONT_SIZE_LEVEL++
  }

})

document.getElementById('decrease_font').addEventListener('click', function() {

  if ( FONT_SIZE_LEVEL >= 0 ) { 
    SELECTOR_TO_TOGGLE_TEXT_SIZE.forEach( function(cls) {
      const originalFontSize = $(cls).css('font-size');
      const originalFontNumber = parseFloat(originalFontSize, 10);
      const newFontSize = originalFontNumber/1.1;
      $(cls).css('font-size', newFontSize);
    })
    FONT_SIZE_LEVEL--
  }

})
