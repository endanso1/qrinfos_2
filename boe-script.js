// Sample BOE data
const boeData = {
  40325141031: {
    status: "Assessed",
    pdfDate: "07/03/2025 17:55:31",
    amount: "3,013.56 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    trackingLink: "https://customs-tracking-link.com/40325141031",
  },
  123456789: {
    status: "Pending",
    pdfDate: "08/03/2025 10:30:00",
    amount: "1,500.00 GHS",
    watermark: "Pending Customs Validation",
    trackingLink: "https://customs-tracking-link.com/123456789",
  },
};

// Function to get query parameter from URL
function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Load BOE data based on URL parameter
function loadBOEData() {
  const boeNumber = getQueryParam("boe_no");
  if (!boeNumber || !boeData[boeNumber]) {
    document.querySelector("main").innerHTML =
      "<h2 class='section-title'>BOE Not Found</h2>";
    return;
  }

  // Update table with BOE details
  document.getElementById("boe-number").textContent = boeNumber;
  document.getElementById("boe-status").textContent = boeData[boeNumber].status;
  document.getElementById("pdf-date").textContent = boeData[boeNumber].pdfDate;
  document.getElementById("amount").textContent = boeData[boeNumber].amount;
  document.getElementById("watermark").textContent =
    boeData[boeNumber].watermark;
  document
    .getElementById("tracking-link")
    .setAttribute("href", boeData[boeNumber].trackingLink);
}

// Run the function on page load
window.onload = loadBOEData;
