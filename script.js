const API_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL";  // Replace with your deployed Google Apps Script URL

document.getElementById("bookingForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const comments = document.getElementById("comments").value || "";

    if (!name || !email || !checkin || !checkout) {
        alert("Please fill in all required fields.");
        return;
    }

    const requestData = {
        name,
        email,
        checkin,
        checkout,
        comments
    };

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestData),
        });

        if (response.ok) {
            const result = await response.json();
            alert("✅ Booking request submitted!");
            document.getElementById("bookingForm").reset();
        } else {
            console.error("❌ Error:", await response.text());
        }
    } catch (error) {
        console.error("❌ Network error:", error);
    }
});

// Load bookings on page load
fetchBookings();
