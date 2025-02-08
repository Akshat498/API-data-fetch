// Array of possible professions
const professions = [
    "Software Engineer", "Data Scientist", "Doctor", "Graphic Designer",
    "Project Manager", "Product Manager", "Marketing Specialist",
    "Accountant", "Business Analyst", "Nurse", "Artist", "Architect", "Consultant"
];

const API_URL = "https://randomuser.me/api/?results=20";
const container = document.getElementById("cards");
const toggleButton = document.getElementById("click-buton");

// Function to fetch data and display cards
function fetchAndDisplayUsers() {
    // Clear existing content before fetching new data
    container.innerHTML = "";

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(user => {
                const randomProfession = professions[Math.floor(Math.random() * professions.length)];
                const card = document.createElement("div");
                card.classList.add("card");
                card.innerHTML = `
                    <div class="card-content">
                        <h2>${user.name.first} ${user.name.last}</h2>
                        <h3>${user.dob.age} years old</h3>
                        <p>${user.email}</p>
                        <p>${user.location.city}, ${user.location.country}</p>
                        <p><strong>Profession:</strong> ${randomProfession}</p>
                    </div>
                `;
                container.appendChild(card);
            });

            // Show the cards after fetching
            container.style.display = "grid";
        })
        .catch(error => console.error("Error fetching data:", error));
}

// Toggle button functionality
toggleButton.addEventListener("click", () => {
    if (container.style.display === "none" || container.innerHTML === "") {
        fetchAndDisplayUsers();  // Fetch data if container is empty
    } else {
        container.style.display = "none";  // Hide cards if they are visible
    }
});
