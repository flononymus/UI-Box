// module.exports = function () {


export default function navbar() {

    // document.getElementById("navbar");

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

    
    
    // return `
    
    //     <nav class="navMenu"> 
    //     <button class="nav-Button" id="settings-link">Settings</button>   
    //     <button id="home-link">Home</button>   
    //     </nav>
    //     `;
}
// document.getElementById("navbar").append.nav