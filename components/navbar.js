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

            <div class="navbar__menu-desk">
                <div class="navbar__menu-el">
                    <a href="#">home</a>
                </div>
                <div class="navbar__menu-el">
                    <a href="#">contacto</a>
                </div>
                <div class="navbar__menu-el">
                    <a href="#">experiencias</a>
                </div>
                <div class="navbar__menu-el">
                    <a href="#">sobre mi</a>
                </div>
            </div>
        </div>

        <div class="navbar__menu-modal">
                <div class="menu__close-btn">
                    <h2 class="">X</h2>
                </div>
                <div class="navbar__menu-modal-el">
                    <a href="#">HOME</a>
                </div>
                <div class="navbar__menu-modal-el">
                    <a href="#">CONTACTO</a>
                </div>
                <div class="navbar__menu-modal-el">
                    <a href="#">EXPERIENCIAS</a>
                </div>
                <div class="navbar__menu-modal-el">
                    <a href="#">SOBRE MI</a>
                </div>
         </div>


        <div class="header__home">
            <h1 class="header__bienvenida">Hola <br> soy Seba</h1>
        </div>
    </div>
    `
    target.appendChild(containerEl);

    const hamburguer = document.querySelector('.navbar__hamburger');
    const modalMenu  = document.querySelector('.navbar__menu-modal');

    hamburguer.addEventListener('click', ()=>{
        modalMenu.setAttribute('style', 'display: flex');
        console.log("clicked hamb")
    })

    const closeButton = document.querySelector('.menu__close-btn');
    closeButton.addEventListener('click', ()=>{
        modalMenu.setAttribute('style', 'display: none');
    })

};

// function listenerHamburguer(){

// }