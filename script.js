const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxSL0z8D_d2O_kLbLuMEySykr7jI1iIb4Hv9t2DmvMAlVASvRjPxEULFVg_I_ivX8zDkQ/exec";  // 🔹 Replace with new URL

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
});const GOOGLE_SCRIPT_URL = "YOUR_NEW_GOOGLE_SCRIPT_DEPLOYMENT_URL";  // 🔹 Replace with new URL

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
});const GOOGLE_SCRIPT_URL = "YOUR_NEW_GOOGLE_SCRIPT_DEPLOYMENT_URL";  // 🔹 Replace with new URL

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
});const GOOGLE_SCRIPT_URL = "YOUR_NEW_GOOGLE_SCRIPT_DEPLOYMENT_URL";  // 🔹 Replace with new URL

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
