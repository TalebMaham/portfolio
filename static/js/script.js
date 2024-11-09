document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll("nav a");

    // Fonction pour afficher une section en fonction de l'indicateur
    function showSection(sectionId) {
        sections.forEach(section => {
            section.style.display = (section.id === sectionId) ? "block" : "none";
        });
    }

    // Fonction pour charger l'indicateur de section via AJAX
    function loadSection(sectionName) {
        fetch(`portfolio/section/${sectionName}`)
            .then(response => response.json())
            .then(data => {
                showSection(data.section);
            })
            .catch(error => console.error('Erreur lors du chargement de la section:', error));
    }

    // Écouter les clics sur les liens de navigation
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const sectionName = this.getAttribute("data-section");
            loadSection(sectionName);
        });
    });

    // Charger la première section par défaut (par exemple, "about")
    loadSection("about");
});
