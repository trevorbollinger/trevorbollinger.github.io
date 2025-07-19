// Reusable Navbar Component
class Navbar {
    constructor(options = {}) {
        this.options = {
            brand: {
                text: 'boli.dev',
                logo: 'images/tralionsmall.png',
                link: 'index.html'
            },
            links: [
                { text: 'Home', href: 'index.html' },
                { text: 'Contact', href: 'contact.html' },
                { text: 'Priorities', href: 'priorities.html' },
                { text: 'Privacy', href: 'privacy.html' }
            ],
            ...options
        };
    }

    // Generate navbar HTML
    generateHTML() {
        const brand = this.options.brand;
        const links = this.options.links;

        return `
            <nav class="navbar">
                <a class="navbar-brand" href="${brand.link}">
                    <img src="${brand.logo}" width="28" height="28" alt="${brand.text}">
                </a>
                <ul>
                    ${links.map(link => `
                        <li><a class="navbar-button" href="${link.href}">${link.text}</a></li>
                    `).join('')}
                </ul>
            </nav>
        `;
    }

    // Inject navbar into the page
    inject() {
        // Create navbar element
        const navbarElement = document.createElement('div');
        navbarElement.innerHTML = this.generateHTML();
        navbarElement.className = 'navbar-container';

        // Insert at the beginning of the body
        const body = document.body;
        body.insertBefore(navbarElement.firstElementChild, body.firstChild);

        // Add line break after navbar for spacing
        const br = document.createElement('br');
        body.insertBefore(br, body.firstChild.nextSibling);
    }

    // Auto-detect current page and highlight active link
    highlightActivePage() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navbarLinks = document.querySelectorAll('.navbar-button');

        navbarLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }

    // Initialize navbar
    init() {
        this.inject();
        this.highlightActivePage();
    }
}

// Auto-initialize if script is loaded
if (typeof window !== 'undefined') {
    // Create navbar instance
    const navbar = new Navbar();

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => navbar.init());
    } else {
        navbar.init();
    }
} 