var searchbox = document.querySelector("div.searchbox");
var inputbox = document.querySelector("input[name=\"q\"]");
window.onload = function() {
  inputbox.focus();
}

inputbox.onfocus = function() {
  searchbox.style.border = "1px solid #4d90fe";
}

inputbox.onblur = function() {
  searchbox.style.border = "1px solid #d9d9d9";
}