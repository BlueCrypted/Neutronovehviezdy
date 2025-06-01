document.addEventListener('DOMContentLoaded', function() {
    const themeSwitcher = document.getElementById('theme-switcher');
    const bodyElement = document.body;
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'light') {
        bodyElement.classList.add('light-mode');
        themeSwitcher.textContent = 'Tmavý Režim';
    } else {
        themeSwitcher.textContent = 'Svetlý Režim';
    }

    themeSwitcher.addEventListener('click', function() {
        bodyElement.classList.toggle('light-mode');
        let themeToStore = 'dark';
        if (bodyElement.classList.contains('light-mode')) {
            themeToStore = 'light';
            themeSwitcher.textContent = 'Tmavý Režim';
        } else {
            themeSwitcher.textContent = 'Svetlý Režim';
        }
        localStorage.setItem('theme', themeToStore);
    });

    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    const navLinks = document.querySelectorAll('nav ul li a');
    function updateActiveLink() {
        let currentHash = window.location.hash || '#introduction';
        if (currentHash === '#') currentHash = '#introduction'; // Default to introduction if hash is just '#'

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentHash) {
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('hashchange', updateActiveLink);
    updateActiveLink(); // Call on page load to set the initial active link

    // On-scroll animations for feature list items (simple example)
    // For a robust solution, use Intersection Observer API
    const featureLists = document.querySelectorAll('.feature-list');
    featureLists.forEach(list => {
        const items = list.querySelectorAll('li');
        items.forEach((item, index) => {
            // This is a simplified delay based on index,
            // ideally, trigger when item is in viewport.
            // For simple page load, this is okay.
            item.style.animationDelay = `${index * 0.1 + 0.3}s`; 
        });
    });
});