export default function navbar() {

    const nav = document.createElement('nav');
    nav.className = 'navMenu';

    const settingsButton = document.createElement('button');
    settingsButton.className = 'nav-Button';
    settingsButton.id = 'settings-link';
    settingsButton.textContent = 'Settings';

    const homeButton = document.createElement('button');
    homeButton.id = 'home-link';
    homeButton.textContent = 'Home';

    nav.appendChild(settingsButton);
    nav.appendChild(homeButton);

return nav;
}