const professions = ["Data Scientist", "Doctor", "Graphic Designer", "Project Manager", "Product Manager", "Marketing Specialist", "Business Analyst", "Nurse", "Artist", "Architect", "Consultant"];

const API_URL = "https://randomuser.me/api/?results=20";
const container = document.getElementById("cards");
const toggleButton = document.getElementById("click-buton");

const fetchAndDisplayUsers = () => {
    container.innerHTML = "";
    fetch(API_URL)
        .then(res => res.json())
        .then(({ results }) => {
            container.innerHTML = results.map(user => `
                <div class="card">
                    <div class="card-content">
                        <h2>${user.name.first} ${user.name.last}</h2>
                        <h3>${user.dob.age} years old</h3>
                        <p>${user.email}</p>
                        <p>${user.location.city}, ${user.location.country}</p>
                        <p><strong>Profession:</strong> ${professions[Math.floor(Math.random() * professions.length)]}</p>
                    </div>
                </div>
            `).join("");
            container.style.display = "grid";
        })
        .catch(console.error);
};
toggleButton.addEventListener("click", () => {
    container.style.display = container.style.display === "none" || !container.innerHTML ? fetchAndDisplayUsers() : "none";
});