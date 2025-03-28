document.addEventListener("DOMContentLoaded", () => {
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach(faq => {
        const question = faq.querySelector(".faq-question");
        const answer = faq.querySelector(".faq-answer");

        question.addEventListener("click", () => {
            answer.classList.toggle("visible");
        });
    });
});

const FAQs = [
    {
        question: "How can I navigate through the website?",
        answer: "You can use the navigation bar at the top of the page to access different sections like Home, Menu, Reservations, Contact Us, and About Us."
    },
    {
        question: "What is the purpose of the Menu page?",
        answer: "The Menu page displays all the available dishes and beverages offered by the restaurant, along with their descriptions and prices."
    },
    {
        question: "What information is available on the Contact Us page?",
        answer: "The Contact Us page provides the restaurant's contact details, business hours, and a map to help you locate the restaurant."
    },
    {
        question: "What can I find on the About Us page?",
        answer: "The About Us page gives an overview of the restaurant, including its history, mission, and values."
    },
    {
        question: "Is the website mobile-friendly?",
        answer: "Yes, the website is fully responsive and works seamlessly on mobile devices, tablets, and desktops."
    },
    {
        question: "What happens when I click the Login button?",
        answer: "Clicking the Login button takes you to the login page, where you can enter your credentials to access your account."
    },
    {
        question: "Can I sign up for an account?",
        answer: "Yes, you can sign up for an account by clicking the 'Sign Up' button in the navigation bar and filling out the registration form."
    }
];

const faqContainer = document.querySelector(".faq-container");

if (faqContainer) {
    FAQs.forEach(faq => {
        const faqDiv = document.createElement("div");
        faqDiv.classList.add("faq");

        const question = document.createElement("h3");
        question.classList.add("faq-question");
        question.textContent = faq.question;

        const answer = document.createElement("p");
        answer.classList.add("faq-answer");
        answer.textContent = faq.answer;

        faqDiv.appendChild(question);
        faqDiv.appendChild(answer);
        faqContainer.appendChild(faqDiv);
    });
}