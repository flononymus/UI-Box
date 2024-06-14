module.export = function () {
    <nav class="navMenu"> 
    <button class="nav-Button" id="settings-link">Settings</button>   
    <button id="home-link">Home</button>   
    </nav>
}


function renderNavbar() {
  navbarContainer.innerHTML = navbarContent();
}