// ====================== SHOW NAVBAR ======================
const showMenu = (headerToggle, navbarId) => {
    const toggleBtn = document.getElementById(headerToggle),
        nav = document.getElementById(navbarId);

    // Validate that variables exist
    if (toggleBtn && nav) {
        toggleBtn.addEventListener('click', () => {

            // We add the show menu class to the dic tag with tha nav menu class
            nav.classList.toggle('show-menu');

            // Change icon
            toggleBtn.classList.toggle('bx-x')
        })
    }
}

showMenu('header-toggle', 'navbar');

// ================ LINK ACTIVE ==============
const linkColor = document.querySelectorAll('.nav__link');

function colorLink() {
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active');
}

linkColor.forEach(l => l.addEventListener('click', colorLink));

