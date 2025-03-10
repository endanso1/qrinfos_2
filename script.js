function generateQRCode() {
  let boeNumber = document.getElementById("boeInput").value.trim();
  if (boeNumber === "") {
    alert("Please enter a BOE number!");
    return;
  }

  // Clear previous QR code
  document.getElementById("qrcode").innerHTML = "";

  // Generate the URL for BOE details
  let boeUrl = `https://endanso1.github.io/qrinfos_2/boe.html?boe_no=${boeNumber}`;

  // Generate QR Code
  new QRCode(document.getElementById("qrcode"), {
    text: boeUrl,
    width: 200,
    height: 200,
  });
}
