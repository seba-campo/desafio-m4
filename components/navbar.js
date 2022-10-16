function navbarComponent(target) {
    const containerEl = document.createElement('div');
    
    containerEl.innerHTML = `
    <div class="header__container">
        <div class="navbar">
            <a href="#"><img class="navbar__logo" src="./src/brand-logo.png"></a>
            
            <div class="navbar__hamburger">
                <div class="hamburguer__black-box"></div>
                <div class="hamburguer__black-box"></div>
                <div class="hamburguer__black-box"></div>
            </div>
        </div>
    
        <div class="header__home">
            <h1 class="header__bienvenida">Hola <br> soy Seba</h1>
        </div>
    </div>
    `
    target.appendChild(containerEl);
}