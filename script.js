// 🔹 Replace with your **latest** Google Apps Script deployment URL
const API_URL = "https://script.google.com/macros/s/AKfycbxSL0z8D_d2O_kLbLuMEySykr7jI1iIb4Hv9t2DmvMAlVASvRjPxEULFVg_I_ivX8zDkQ/exec";

// 🟢 Submit Booking Request
document.getElementById("bookingForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    // 🟢 Get form values
    const requestData = {
        "Guest Name": document.getElementById("name").value.trim(),
        "Email": document.getElementById("email").value.trim(),
        "Check-in Date": document.getElementById("checkin").value,
        "Check-out Date": document.getElementById("checkout").value,
        "Comments": document.getElementById("comments").value.trim() || ""
    };

    // 🛑 Check for empty fields
    if (!requestData["Guest Name"] || !requestData["Email"] || !requestData["Check-in Date"] || !requestData["Check-out Date"]) {
        alert("⚠️ Please fill in all required fields.");
        return;
    }

    try {
        console.log("🔄 Sending request to:", API_URL);
        console.log("📦 Request Data:", requestData);

        // 🔹 Send data to Google Apps Script
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        });

        const result = await response.json();
        console.log("✅ Server Response:", result);

        if (result.success) {
            alert("✅ Booking request submitted successfully!");
            document.getElementById("bookingForm").reset();
        } else {
            alert("❌ Error: " + result.error);
        }

    } catch (error) {
        console.error("❌ Network error:", error);
        alert("❌ Error submitting booking. Check console for details.");
    }
});
