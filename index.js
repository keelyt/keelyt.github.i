$(".vid-link").each(function() {
  var href = $(this)
    .find("a")
    .attr("href");
  $(this).magnificPopup({
    items: {
      src: href
    },
    type: "iframe"
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