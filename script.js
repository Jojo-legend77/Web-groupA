const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".place-card");

searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();

  cards.forEach(card => {
    const name = card.getAttribute("data-name").toLowerCase();
    card.style.display = name.includes(query) ? "block" : "none";
  });
});
const toggleBtn = document.getElementById("darkToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
const apiKey = "YOUR_API_KEY";
const city = "Addis Ababa";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  .then(response => response.json())
  .then(data => {
    const weatherDiv = document.getElementById("weather");
    const temp = data.main.temp;
    const desc = data.weather[0].description;
    weatherDiv.innerHTML = `🌤️ Weather in ${city}: ${temp}°C, ${desc}`;
  })
  .catch(() => {
    document.getElementById("weather").innerText = "Unable to load weather info.";
  });
