function downloadImage() {
  var file = document.getElementById("qrcode").src;
  var doc = new jsPDF();
  
  doc.setFontSize(80);
  doc.text(35, 25, "");
  doc.addImage(file, 'PNG', 15, 40, 180, 180);
  doc.save('logo.pdf')
}
