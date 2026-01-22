# Institute FAQ Chatbot 🤖

A lightweight, rule-based chatbot designed to provide instant responses to frequently asked questions (FAQs) for an educational institute. This project was developed as part of a college hackathon to demonstrate basic string manipulation and pattern-matching logic.

## 📌 Project Overview

The **Institute FAQ Chatbot** acts as an official student help desk. It identifies keywords in user queries to provide specific information regarding college timings, fees, admissions, and more.

### Key Features

* **15+ Predefined FAQ Rules:** Handles queries ranging from fees and scholarships to canteen and transport.
* **Pattern Matching:** Uses keyword detection to understand user intent.
* **Glassmorphism UI:** A modern, semi-transparent user interface with a background blur effect.
* **Responsive Chat Window:** Automatically scrolls to the latest message for a seamless user experience.

## 🛠️ Tech Stack

* **Frontend:** HTML5
* **Styling:** CSS3 (Flexbox, Backdrop-filters)
* **Logic:** Vanilla JavaScript (ES6)

## 📂 File Structure

* `index.html`: Contains the structural layout, including the chat display area and input fields.
* `style.css`: Manages the visual presentation, fonts, and "glass" container effects.
* `script.js`: Houses the logic for processing user input and matching keywords to responses.
* `bg.jpg`: Background image for the site.

## ⚙️ How It Works (Logic Flow)

1. **Input:** The user enters a question in the text field.
2. **Normalization:** The system converts the input string to lowercase to ensure the bot is not case-sensitive.
3. **Pattern Matching:** The `chatbotReply()` function uses a series of `if...else if` statements and the `.includes()` method to scan for keywords.
4. **Fallback:** If no keywords are matched, a default message is returned, guiding the user to stay on topic.
5. **Output:** The result is dynamically appended to the `#chat-box` div.
