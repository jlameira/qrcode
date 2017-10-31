function downloadImage() {
  var file = document.getElementById("qrcode").src;
  var a = document.createElement("a");
  a.href = file;
  a.download = "logo";
  document.body.appendChild(a);
  a.click();
  $(window).on("focus", function(e) {});
}
