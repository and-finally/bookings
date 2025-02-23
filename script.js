// 🔹 Use your Cloudflare Worker URL
const API_URL = "https://dawn-dream-google-sheets-proxy.mark-eaa.workers.dev/";

// 🟢 Submit Booking Request
document.getElementById("bookingForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const requestData = {
        "Guest Name": document.getElementById("name").value.trim(),
        "Email": document.getElementById("email").value.trim(),
        "Check-in Date": document.getElementById("checkin").value,
        "Check-out Date": document.getElementById("checkout").value,
        "Comments": document.getElementById("comments").value.trim() || ""
    };

    if (!requestData["Guest Name"] || !requestData["Email"] || !requestData["Check-in Date"] || !requestData["Check-out Date"]) {
        alert("⚠️ Please fill in all required fields.");
        return;
    }

    try {
        console.log("🔄 Sending request to:", API_URL);
        console.log("📦 Request Data:", requestData);

        // 🔹 Send data to Cloudflare Worker
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        });

        const data = await response.json();
        console.log("✅ Server Response:", data);

        if (data.success) {
            alert("✅ Booking request submitted successfully!");
            document.getElementById("bookingForm").reset();
        } else {
            alert("❌ Error: " + data.error);
        }

    } catch (error) {
        console.error("❌ Network error:", error);
        alert("❌ Error submitting booking. Check console for details.");
    }
});
