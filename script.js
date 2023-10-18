document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate");
    const resetButton = document.getElementById("reset");
    const resultDiv = document.getElementById("result");
    const roiAmountSpan = document.getElementById("roiAmount");
    const totalAmountSpan = document.getElementById("totalAmount");
  
    calculateButton.addEventListener("click", function () {
      const plan = document.getElementById("plan").value;
      const months = parseInt(document.getElementById("months").value);
      const amount = parseFloat(document.getElementById("amount").value);
  
      let roiPercentage;
  
      // Set ROI rates based on the selected plan and duration
      if (plan === "starter") {
        if (months === 6) {
          roiPercentage = 0.10; // 6 months ROI for Starter Plan (10%)
        } else if (months === 12) {
          roiPercentage = 0.22; // 12 months ROI for Starter Plan (22%)
        }
      } else if (plan === "pro") {
        if (months === 6) {
          roiPercentage = 0.14; // 6 months ROI for Pro Plan (14%)
        } else if (months === 12) {
          roiPercentage = 0.30; // 12 months ROI for Pro Plan (30%)
        }
      }
  
      const roiAmount = amount * roiPercentage;
      const totalAmount = amount + roiAmount;
  
      roiAmountSpan.textContent = `₦${roiAmount.toFixed(2)}`;
      totalAmountSpan.textContent = `₦${totalAmount.toFixed(2)}`;
      resultDiv.classList.remove("hidden");
    });
  
    resetButton.addEventListener("click", function () {
      document.getElementById("plan").value = "starter"; // Reset plan selection
      document.getElementById("months").value = "6";
      document.getElementById("amount").value = "";
      resultDiv.classList.add("hidden");
    });
  });
  