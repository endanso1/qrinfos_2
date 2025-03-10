// Function to get BOE number from URL
function getBOENumber() {
  const params = new URLSearchParams(window.location.search);
  return params.get("boe_no");
}

// Simulated BOE Data (Replace this with real API data)
const boeData = {
  40325141031: { pdfDate: "07/03/2025 17:55:31", amount: "3,013.56 GHS" },
  12345678901: { pdfDate: "08/04/2025 10:30:00", amount: "5,000.00 GHS" },
  98765432101: { pdfDate: "09/05/2025 15:45:12", amount: "7,500.75 GHS" },
};

// Get BOE number from URL
const boeNo = getBOENumber();

if (boeNo && boeData[boeNo]) {
  document.getElementById("boeNo").textContent = boeNo;
  document.getElementById("pdfDate").textContent = boeData[boeNo].pdfDate;
  document.getElementById("amount").textContent = boeData[boeNo].amount;
} else {
  document.getElementById("errorMessage").style.display = "block";
}
