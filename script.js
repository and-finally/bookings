const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx2lIAFM3jEyT-wbCLhvvxq0kZzFiEI2i8k__6r8HZ0jsLXG1AVuyHPPXf6Mg1ADTqdsg/exec";  // 🔹 Replace with your deployment URL

// 🟢 Submit Booking Request
document.getElementById("bookingForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const requestData = {
        "Guest Name": document.getElementById("name").value,  
        "Email": document.getElementById("email").value,      
        "Check-in Date": document.getElementById("checkin").value,  
        "Check-out Date": document.getElementById("checkout").value,  
        "Comments": document.getElementById("comments").value || ""
    };

    try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        });

        const result = await response.text();
        alert(result);
        document.getElementById("bookingForm").reset();
    } catch (error) {
        console.error("❌ Error submitting booking:", error);
        alert("❌ Error submitting booking. Check console for details.");
    }
});
