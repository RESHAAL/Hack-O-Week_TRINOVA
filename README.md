# 🚀 Hack-o-Week Portfolio: From Embedded IoT to AI Web Apps

Welcome to the master repository for our **Hack-o-Week** submissions. This repository showcases a diverse collection of projects spanning **Natural Language Processing (NLP)**, **Embedded Systems & IoT Simulations**, **Full-Stack AI Web Development**, and **Data Processing**.

This portfolio reflects the ability to build intelligent systems, work across multiple domains, and handle real-world messy data.

## 📂 Project Directory

Below is a high-level summary of all projects developed during this event. *(Navigate to individual folders for detailed READMEs and setup instructions.)*


### 1️⃣ SIT Nagpur Institute FAQ Chatbot (NLP/JavaScript)

A smart, purely client-side NLP Chatbot built using Vanilla HTML, CSS, and JavaScript.

**Key Features:**

* Synonym mapping and keyword matching
* TF-IDF based response ranking
* Context awareness for follow-up queries
* Fallback handling and silent analytics logging

**Tech Stack:** Vanilla JS, HTML5, CSS3

### 2️⃣ AI Travel Planner (React + Vite)

A full-stack web application that generates personalized travel itineraries using AI.

**Key Features:**

* AI-generated day-by-day travel plans
* Authentication and trip management
* Fallback logic if AI API fails
* Clean and responsive UI

**Tech Stack:** React, Vite, Tailwind CSS, TanStack Query, External APIs


### 3️⃣ PIR Motion-Based Automatic Door System (IoT/Arduino)

A smart door automation system simulated in Wokwi.

**Key Features:**

* Motion detection using PIR sensor
* Automatic door control using servo motor
* LED indicators and serial logging

**Tech Stack:** Arduino Uno, C++, Wokwi Simulator

### 4️⃣ Forklift Safety Alert System (IoT/Arduino)

An industrial safety prototype that prevents collisions using distance sensing.

**Key Features:**

* Obstacle detection using ultrasonic sensor
* Automatic motor stopping
* Real-time buzzer alerts

**Tech Stack:** Arduino Uno, C++, Wokwi Simulator


### 5️⃣ Sensor Data Cleaning & Preprocessing (Python)

A data-focused project that cleans and prepares real-world air quality sensor data for analysis.

**Key Features:**

* Missing value handling using **linear interpolation**
* Outlier detection using the **IQR method**
* Outlier treatment using **capping (Winsorization)**
* Visual comparison using boxplots and density plots

**Why this matters:**
Real-world datasets are rarely clean. This project ensures the data is reliable and ready for analysis or machine learning.

**Output:**
`cleaned_beijing_sensors.csv`

**Tech Stack:** Python, pandas, numpy, matplotlib, seaborn

## 🛠️ Unified Technology Stack

| Discipline          | Technologies Used                    |
| :------------------ | :----------------------------------- |
| **Frontend Web**    | React, Vite, Tailwind CSS, HTML, CSS |
| **Backend & Logic** | JavaScript, APIs, TanStack Query     |
| **AI & NLP**        | TF-IDF Algorithms, LLM APIs          |
| **Hardware & IoT**  | Arduino Uno, C++, Wokwi Simulation   |
| **Data Processing** | Python, pandas, numpy                |


## 🎯 Key Achievements & Learnings

1. **Cross-Domain Versatility:** Switched between frontend development, embedded systems, and data processing within the same event.
2. **Algorithm Design:** Built custom NLP logic (TF-IDF + context handling) without heavy libraries.
3. **Data Handling:** Worked with real-world noisy datasets and applied practical preprocessing techniques.
4. **Robust Systems:** Designed fallback mechanisms to ensure systems remain stable even when inputs or APIs fail.

## 🚀 How to Navigate This Repository

1. Open any project folder
2. Read the specific `README.md`
3. Run web apps locally or explore IoT simulations via Wokwi
