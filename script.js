// SEND MESSAGE FUNCTION
function sendMessage() {
    const inputBox = document.getElementById("userInput");
    const chatBox = document.getElementById("chat-box");

    const userText = inputBox.value.trim();
    if (userText === "") return;

    addMessage(userText, "user"); // Add user message

    const botReply = chatbotReply(userText); // Get bot reply
    setTimeout(() => {
        addMessage(botReply, "bot"); // Add bot message with delay
    }, 500);

    inputBox.value = "";
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll
}

// ENTER KEY SUPPORT
function handleEnter(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

// ADD MESSAGE TO CHAT BOX
function addMessage(text, sender) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");

    messageDiv.classList.add("message", sender);
    messageDiv.innerText = text;

    chatBox.appendChild(messageDiv);
}

// RULE-BASED CHATBOT LOGIC
function chatbotReply(msg) {
    msg = msg.toLowerCase();

    if (msg.includes("time") || msg.includes("timing") || msg.includes("hours")) {
        return "Institute timings are 9:00 AM to 4:00 PM.";
    } 
    else if (msg.includes("fee") || msg.includes("cost")) {
        return "The annual institute fees are ₹1,60,000.";
    } 
    else if (msg.includes("contact") || msg.includes("phone") || msg.includes("number")) {
        return "You can contact us at 9876543210.";
    } 
    else if (msg.includes("address") || msg.includes("location") || msg.includes("where")) {
        return "The institute is located in Nagpur, Maharashtra.";
    } 
    else if (msg.includes("admission") || msg.includes("apply") || msg.includes("join")) {
        return "Admissions are done through entrance examination.";
    } 
    else if (msg.includes("course") || msg.includes("program") || msg.includes("branch")) {
        return "The institute offers Engineering and Management programs.";
    } 
    else if (msg.includes("hostel") || msg.includes("stay") || msg.includes("accommodation")) {
        return "Hostel facilities are available for students.";
    } 
    else if (msg.includes("library") || msg.includes("books") || msg.includes("reading")) {
        return "The library is open from 9:00 AM to 7:00 PM.";
    } 
    else if (msg.includes("placement") || msg.includes("job") || msg.includes("package")) {
        return "The institute provides placement assistance to students.";
    } 
    else if (msg.includes("exam") || msg.includes("tests") || msg.includes("assessment")) {
        return "Examinations are conducted semester-wise.";
    } 
    else if (msg.includes("attendance") || msg.includes("percentage")) {
        return "Minimum 75% attendance is required.";
    } 
    else if (msg.includes("scholarship") || msg.includes("financial aid")) {
        return "Scholarships are available as per institute norms.";
    } 
    else if (msg.includes("canteen") || msg.includes("food") || msg.includes("cafeteria")) {
        return "The institute has a hygienic canteen facility.";
    } 
    else if (msg.includes("bus") || msg.includes("transport")) {
        return "Transport facilities are available for nearby areas.";
    } 
    else if (msg.includes("holiday") || msg.includes("vacation")) {
        return "The academic calendar contains all holiday details.";
    } 
    else {
        return "Sorry, I can answer only institute-related FAQs.";
    }
}
