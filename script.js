function sendMessage() {
    let inputBox = document.getElementById("userInput");
    let chatBox = document.getElementById("chat-box");

    let userText = inputBox.value.trim();
    if (userText === "") return;

    chatBox.innerHTML += "<b>You:</b> " + userText + "<br>";

    let botReply = chatbotReply(userText);

    chatBox.innerHTML += "<b>Bot:</b> " + botReply + "<br><br>";

    inputBox.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

// RULE BASED BACKEND LOGIC
function chatbotReply(msg) {
    msg = msg.toLowerCase();

    // 1. TIMINGS
    if (msg.includes("time") || msg.includes("timing") || msg.includes("hours")) {
        return "Institute timings are 9:00 AM to 4:00 PM.";
    }

    // 2. FEES
    else if (msg.includes("fee") || msg.includes("fees") || msg.includes("cost")) {
        return "The annual institute fees are ₹60,000.";
    }

    // 3. CONTACT
    else if (msg.includes("contact") || msg.includes("phone") || msg.includes("number")) {
        return "You can contact us at 9876543210.";
    }

    // 4. ADDRESS
    else if (msg.includes("address") || msg.includes("location") || msg.includes("where")) {
        return "The institute is located in Nagpur, Maharashtra.";
    }

    // 5. ADMISSION
    else if (msg.includes("admission") || msg.includes("apply") || msg.includes("join")) {
        return "Admissions are done through entrance examination.";
    }

    // 6. COURSES
    else if (msg.includes("course") || msg.includes("program") || msg.includes("branch")) {
        return "The institute offers Engineering and Management programs.";
    }

    // 7. HOSTEL
    else if (msg.includes("hostel") || msg.includes("stay") || msg.includes("accommodation")) {
        return "Hostel facilities are available for students.";
    }

    // 8. LIBRARY
    else if (msg.includes("library") || msg.includes("books") || msg.includes("reading")) {
        return "The library is open from 9:00 AM to 7:00 PM.";
    }

    // 9. PLACEMENT
    else if (msg.includes("placement") || msg.includes("job") || msg.includes("package")) {
        return "The institute provides placement assistance to students.";
    }

    // 10. EXAMS
    else if (msg.includes("exam") || msg.includes("tests") || msg.includes("assessment")) {
        return "Examinations are conducted semester-wise.";
    }

    // 11. ATTENDANCE
    else if (msg.includes("attendance") || msg.includes("percentage")) {
        return "Minimum 75% attendance is required.";
    }

    // 12. SCHOLARSHIP
    else if (msg.includes("scholarship") || msg.includes("financial aid")) {
        return "Scholarships are available as per institute norms.";
    }

    // 13. CANTEEN
    else if (msg.includes("canteen") || msg.includes("food") || msg.includes("cafeteria")) {
        return "The institute has a hygienic canteen facility.";
    }

    // 14. TRANSPORT
    else if (msg.includes("bus") || msg.includes("transport")) {
        return "Transport facilities are available for nearby areas.";
    }

    // 15. HOLIDAYS
    else if (msg.includes("holiday") || msg.includes("vacation")) {
        return "The academic calendar contains all holiday details.";
    }

    // DEFAULT
    else {
        return "Sorry, I can answer only institute-related FAQs.";
    }
}
