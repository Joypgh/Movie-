// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Search bar functionality
    const searchInput = document.querySelector("input[placeholder='Search for movies...']");
    const movieTitles = document.querySelectorAll("h3");

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();

        movieTitles.forEach(title => {
            const movieCard = title.closest(".min-w-max");
            if (title.textContent.toLowerCase().includes(searchTerm)) {
                movieCard.style.display = "block";
            } else {
                movieCard.style.display = "none";
            }
        });
    });

    // Smooth scroll for overflow sections
    const overflowSections = document.querySelectorAll(".overflow-x-auto");
    overflowSections.forEach(section => {
        section.addEventListener("wheel", function (e) {
            e.preventDefault();
            section.scrollBy({
                left: e.deltaY > 0 ? 100 : -100,
                behavior: "smooth"
            });
        });
    });

    // Handle "Upcoming Movies" interactivity (if needed)
    const upcomingMovies = document.querySelectorAll(".min-w-max");
    upcomingMovies.forEach(movie => {
        movie.addEventListener("mouseenter", () => {
            movie.style.transform = "scale(1.05)";
            movie.style.transition = "transform 0.3s";
        });
        movie.addEventListener("mouseleave", () => {
            movie.style.transform = "scale(1)";
        });
    });
});