function upDate(previewPic) {
  document.getElementById("image").style.backgroundImage = "url(" + previewPic.src + ")";
  document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo() {
  document.getElementById("image").style.backgroundImage = "url('')";
  document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}

// Add event listeners and tabindex
const previews = document.querySelectorAll(".preview");

previews.forEach(function(img, index) {
  img.tabIndex = index + 1;

  img.addEventListener("mouseover", function() {upDate(this);});
  img.addEventListener("mouseout", function() {unDo();});
  img.addEventListener("focus", function() {upDate(this);});
  img.addEventListener("blur", function() {unDo();});
});