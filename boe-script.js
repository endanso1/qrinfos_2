// Sample BOE data
const boeData = {
  40325141031: {
    status: "Assessed",
    pdfDate: "07/03/2025 17:55:31",
    amount: "3,013.56 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    trackingLink: "https://example.com/tracking/40325141031",
  },
  123456789: {
    status: "Assessed",
    pdfDate: "08/03/2025 10:30:00",
    amount: "1,500.00 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    trackingLink: "https://example.com/tracking/123456789",
  },
  623456789: {
    status: "Assessed",
    pdfDate: "19/03/2025 12:30:00",
    amount: "10,500.00 GHS",
    watermark:
      "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
    trackingLink: "https://example.com/tracking/623456789",
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

  // Convert boeNumber to a string for lookup
  if (!boeNumber || !boeData[boeNumber]) {
    document.getElementById("boe-number").textContent = "Not Found";
    document.getElementById("boe-status").textContent = "N/A";
    document.getElementById("pdf-date").textContent = "N/A";
    document.getElementById("amount").textContent = "N/A";
    document.getElementById("watermark").textContent = "N/A";

    // Disable tracking link
    const trackingLink = document.getElementById("tracking-link");
    trackingLink.textContent = "N/A";
    trackingLink.removeAttribute("href");
    return;
  }

  // Update BOE details
  document.getElementById("boe-number").textContent = boeNumber;
  document.getElementById("boe-status").textContent = boeData[boeNumber].status;
  document.getElementById("pdf-date").textContent = boeData[boeNumber].pdfDate;
  document.getElementById("amount").textContent = boeData[boeNumber].amount;
  document.getElementById("watermark").textContent =
    boeData[boeNumber].watermark;

  // Update the tracking link
  const trackingLink = document.getElementById("tracking-link");
  trackingLink.textContent = "Declaration Tracking";
  trackingLink.href = boeData[boeNumber].trackingLink;
  trackingLink.target = "#"; // Open in a new tab
}

// Run function on page load
window.onload = loadBOEData;
