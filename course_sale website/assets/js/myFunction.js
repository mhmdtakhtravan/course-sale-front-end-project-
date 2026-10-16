function myFunction(x) {
  var BlackFilter = document.getElementById("overlay");
  var HeaderImg = document.getElementById("H-img");
  var style = window.getComputedStyle(HeaderImg);
  var height = style.getPropertyValue("height");
  if (x.matches) {
    // If media query matches
    BlackFilter.style.height = height;
  } else {
    BlackFilter.style.height = "97vh";
  }
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 1200px)");

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function () {
  myFunction(x);
});
