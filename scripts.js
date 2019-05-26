var vid = document.getElementById("video");
// if (vid.readyState > 3) {
//   $("#video-fallback").hide();
// };
vid.addEventListener("timeupdate", function() {
  $("#video-fallback").hide();
});
 
$(".vid-link").each(function() {
  var href = $(this)
    .find("a")
    .attr("href");
  $(this).magnificPopup({
    items: {
      src: href
    },
    diableOn: 400,
    type: "iframe",
    mainClass: "mfp-fade",
    preloader: false,
    fixedContentPos: true,
    closeBtnInside: false,
    callbacks: {
      open: function() {
        $("#header").hide();
      },
      close: function() {
        $("#header").show();
      }
    }
  });
});

var myFunction = function() {
  document.getElementById("nav-bar").classList.toggle("show");
  document.getElementById("nav-btn-span").classList.toggle("opened");
};

function matchMediaFunction(mq) {
  var classname = document.querySelectorAll(".nav-btn, .nav-link");
  if (mq.matches) {
    // If media query matches
    for (var i = 0; i < classname.length; i++) {
      classname[i].removeEventListener("click", myFunction, false);
    }
  } else {
    // If media query doesn't match
    for (var i = 0; i < classname.length; i++) {
      classname[i].addEventListener("click", myFunction, false);
    }
  }
}

var mq = window.matchMedia("(min-width: 900px)");
matchMediaFunction(mq); // Call listener function at run time
mq.addListener(matchMediaFunction); // Attach listener function on state changes

var nextElements = document.querySelectorAll(".slider span.next, .slider figure.next-img");
for (var i = 0; i < nextElements.length; i++) {
  nextElements[i].addEventListener("click", moveRight);
}
var prevElements = document.querySelectorAll(".slider span.prev, .slider figure.prev-img");
for (var i = 0; i < prevElements.length; i++) {
  prevElements[i].addEventListener("click", moveLeft);
}

function updateListeners() {
  var figureElements = document.querySelectorAll(".slider figure");
  for (var i = 0; i < figureElements.length; i++) {
    if (figureElements[i].classList.contains("next-img")) {
      figureElements[i].addEventListener("click", moveRight);
    } else if (figureElements[i].classList.contains("prev-img")) {
      figureElements[i].addEventListener("click", moveLeft);
    } else {
      figureElements[i].removeEventListener("click", moveRight);
      figureElements[i].removeEventListener("click", moveLeft);
    }
  }
}

function moveRight() {
  $current = $(".slider figure.active").first();
  if ($current.next("figure").length != 0) {
    $next = $current.next("figure");
    $next.removeClass("next-img");
    $next.addClass("active");
    $current.removeClass("active");
    $current.addClass("prev-img");
    $(".slider span.prev").removeClass("hidden-btn");
  }
  if ($current.prev("figure").length != 0) {
    $current.prev("figure").removeClass("prev-img");
    $current.prev("figure").addClass("hide-left");
  }
  if ($next.next("figure").length != 0) {
    $(".slider span.next").removeClass("hidden-btn");
    $next.next("figure").removeClass("hide-right");
    $next.next("figure").addClass("next-img");
  } else {
    $(".slider span.next").addClass("hidden-btn");
  }
  updateListeners();
};

function moveLeft() {
  $current = $(".slider figure.active").first();
  if ($current.prev("figure").length != 0) {
    $prev = $current.prev("figure");
    $prev.removeClass("prev-img");
    $prev.addClass("active");
    $current.addClass("next-img");
    $current.removeClass("active");
    $(".slider span.next").removeClass("hidden-btn");
  }
  if ($current.next("figure").length != 0) {
    $current.next("figure").removeClass("next-img");
    $current.next("figure").addClass("hide-right");
  }
  if ($prev.prev("figure").length != 0) {
    $(".slider span.prev").removeClass("hidden-btn");
    $prev.prev("figure").removeClass("hide-left");
    $prev.prev("figure").addClass("prev-img");
  } else {
    $(".slider span.prev").addClass("hidden-btn");
  }
  updateListeners();
};
