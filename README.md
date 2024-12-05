# MoodCheck 🌟

**Description:**  
MoodCheck is a web application designed to help users monitor and track their mood over time. By inputting their daily mood, users can gain insights into their emotional patterns, discover correlations with different factors, and analyze their mood trends. It helps individuals gain better self-awareness and emotional health insights.

## Features 🚀

- **Track Daily Mood:** Users can log their mood for the day, selecting from various predefined moods.
- **Mood Analytics:** View charts and trends of your mood over time to understand emotional patterns.
- **Mood Correlations:** Track how external factors such as weather, sleep quality, or activity affect your mood.
- **Personalized Insights:** Receive suggestions and tips based on mood trends and emotional well-being.
- **Email Notifications:** Receive email notifications using Nodemailer when specific mood conditions are met.

## Technologies Used 🛠️

- **Frontend:** Next.js, Tailwind CSS
- **Backend:** Node.js (Nodemailer for email functionality)
- **Database:** Firebase (for storing mood data and user information)
- **Styling:** Tailwind CSS
- **Hosting:** Vercel (for deploying the application)

## Live Demo 🌐

[Try MoodCheck Now](https://mood-check.vercel.app/)


## Setup Instructions 🖥️

### Prerequisites  
Ensure you have the following installed on your system:
- **Node.js**
- **Firebase CLI** (for Firebase setup)

### Steps to Run the Project:

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/KlasniMisho123/MoodCheck.git
    cd MoodCheck
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Set Up Firebase:**
   - Go to the [Firebase Console](https://console.firebase.google.com/) and create a new Firebase project.
   - Set up Firestore Database and Firebase Authentication (e.g., Email/Password).
   - Generate Firebase config and replace it in your project’s Firebase configuration file (e.g., `src/firebase.js`).

4. **Set Up Nodemailer for Email Notifications:**
   - Configure the Nodemailer transporter by setting up SMTP settings for your email provider (e.g., Gmail, SendGrid).
   - Create an `.env` file in the root directory with your email credentials:

    ```env
    EMAIL_HOST=smtp.example.com
    EMAIL_PORT=587
    EMAIL_USER=your_email@example.com
    EMAIL_PASS=your_email_password
    ```

5. **Add Environment Variables:**
   - Create a `.env.local` file in the root directory and add your Firebase environment variables:

    ```env
    REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    ```

6. **Start the Development Server:**

    ```bash
    npm run dev
    ```

7. **Build the Project for Production:**

    ```bash
    npm run build
    ```

---

## Usage 📊

- **Input Your Mood:** Select your mood for the day from a list of predefined options.
- **View Analytics:** Explore your mood trends over time, with charts that display your emotional patterns.
- **Track Influencing Factors:** Log factors that influence your mood, like sleep quality, weather, and activities.
- **Email Notifications:** Set up email alerts based on mood entries (e.g., receive an email if a user logs a specific mood).

---

## Future Enhancements 🌟

- Integration with wearable devices to track physiological data (e.g., heart rate, sleep quality).
- Mood-based notifications or reminders for self-care actions.
- Ability to generate weekly/monthly mood reports.
- Machine learning to predict mood trends and suggest actions.

---

## Contributing 🤝

We welcome contributions! Feel free to submit issues, improvements, or pull requests.

---

## Contact 📧

For questions or feedback, reach out to:  
Email: [mikheili.silagava@gmail.com](mailto:mikheili.silagava@gmail.com)

---

## Technologies Used 🛠️

- **Frontend:** Next.js for fast, server-rendered pages, and Tailwind CSS for utility-first styling.
- **Backend:** Node.js with Nodemailer for email notifications.
- **Database:** Firebase (Firestore for storing user data and mood logs).
- **Styling:** Tailwind CSS for responsive, modern design.
- **Hosting:** Vercel for fast, reliable deployment.
