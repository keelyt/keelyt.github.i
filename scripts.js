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
    // iframe: {
    //   markup: '<div class="mfp-iframe-scaler vid-popup">'+
    //   '<div class="mfp-close"></div>'+
    //   '<iframe class="mfp-iframe" frameborder="0" allowfullscreen>            </iframe>'+
    //   '</div>'
    // },
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: true,
    callbacks: {
      open: function() {
        $('#header').hide();
      },
      close: function() {
        $('#header').show();
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
