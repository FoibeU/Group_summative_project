

// Function to apply a theme
function applyTheme(theme) {
    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(`theme-${theme}`);
}

// Function to store theme in local storage
function storeTheme(theme) {
    localStorage.setItem('theme', theme);
}

// Function to load theme from local storage
function loadTheme() {
    const storedTheme = localStorage.getItem('theme') || 'light'; // default to 'light'
    applyTheme(storedTheme);
}

// Event listener for theme switcher button
document.getElementById('themeSwitcher').addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
    storeTheme(newTheme);
});

// Load the theme when the page loads
window.addEventListener('DOMContentLoaded', loadTheme);
//for alerts and notifications


    $(document).ready(function() {
        // Get the current date and format it
        const currentDate = new Date().toLocaleDateString();

        // Define the notifications
        const alerts = [
            "Upcoming room inspections on August 3rd",
            "Maintenance deadline for AC units on August 5th",
            "Urgent: Resident request in Room 101"
        ];

        // Append the current date to the alerts container
        $('#alerts-container').append(`<p class="alert-date">${currentDate}</p>`);

        // Append each alert notification
        alerts.forEach(alert => {
            $('#alerts-container').append(`<p class="alert">${alert}</p>`);
        });
    });

