const GOOGLE_SHEETS_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyWdK_GhCoUjyVcX8FMv4REZy-U-ujFoUkTsxC0XjJmHSfRLfKytr_ACtV9phrfQ46tFw/exec"; 

const calendarContainer = document.getElementById("calendar");
const currentMonthDisplay = document.getElementById("current-month");
let currentMonth = new Date();

// 🟢 Fetch bookings from Google Sheets
async function fetchBookings() {
    try {
        const response = await fetch(GOOGLE_SHEETS_WEB_APP_URL + "?action=fetchBookings");
        const data = await response.json();

        console.log("📅 Bookings Data:", data);

        const bookings = data.records.map(record => ({
            id: record[0], // Record ID
            startDate: record[3], // Check-in Date
            endDate: record[4], // Check-out Date
            status: record[5], // Booking Status
        }));

        renderCalendar(currentMonth, bookings);
    } catch (error) {
        console.error("❌ Error fetching bookings:", error);
    }
}

// 📅 Generate the calendar
function renderCalendar(date, bookings) {
    calendarContainer.innerHTML = "";
    const year = date.getFullYear();
    const month = date.getMonth();

    currentMonthDisplay.textContent = date.toLocaleString("default", { month: "long", year: "numeric" });

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    let calendarHTML = '<table>';
    calendarHTML += '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>';

    let currentDate = new Date(firstDay);
    currentDate.setDate(currentDate.getDate() - currentDate.getDay());

    while (currentDate <= lastDay || currentDate.getDay() !== 0) {
        if (currentDate.getDay() === 0) calendarHTML += '<tr>';

        const dateString = currentDate.toISOString().split('T')[0];
        const bookingStatus = getBookingStatus(dateString, bookings);

        calendarHTML += `<td class="${bookingStatus}">${currentDate.getDate()}</td>`;

        if (currentDate.getDay() === 6) calendarHTML += '</tr>';
        currentDate.setDate(currentDate.getDate() + 1);
    }

    calendarHTML += '</table>';
    calendarContainer.innerHTML = calendarHTML;
}

// 🔴 Get booking status for a given date
function getBookingStatus(dateString, bookings) {
    for (const booking of bookings) {
        if (dateString >= booking.startDate && dateString <= booking.endDate) {
            return booking.status === 'Approved' ? 'booked' : 'pending';
        }
    }
    return 'free';
}

// 🔄 Handle month navigation
document.getElementById("prev-month").addEventListener("click", () => {
    currentMonth.setMonth(currentMonth.getMonth() - 1);
    fetchBookings();
});
document.getElementById("next-month").addEventListener("click", () => {
    currentMonth.setMonth(currentMonth.getMonth() + 1);
    fetchBookings();
});

// 🟢 Submit Booking Request
document.getElementById("bookingForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent page refresh

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const comments = document.getElementById("comments").value || "";

    if (!name || !email || !checkin || !checkout) {
        alert("⚠️ Please fill in all required fields.");
        return;
    }

    const requestData = {
        action: "newBooking",
        name: name,
        email: email,
        checkin: checkin,
        checkout: checkout,
        comments: comments
    };

    try {
        const response = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestData),
        });

        const result = await response.text();
        console.log("✅ Server Response:", result);
        
        alert("✅ Booking request submitted successfully!");
        document.getElementById("bookingForm").reset();
        fetchBookings(); // Refresh calendar

    } catch (error) {
        console.error("❌ Network error:", error);
        alert("❌ Error submitting booking. Check console for details.");
    }
});

// Load bookings on page load
fetchBookings();