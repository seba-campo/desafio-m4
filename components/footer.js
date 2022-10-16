function footerComponent(target) {
    const containerEl = document.createElement('div');
    
    containerEl.innerHTML = `
    <div class="footer__container">
        <div class="footer__brand-container">
            <h3 class="footer__brand">SEBA-CAMPO</h3>
        </div>

        <div class="media">
            <div class="media__link">
                <a href="#" class="media__p">Instagram <img src="./src/instagram-logo.png" class="media__p-logo"></a>
            </div>

            <div class="media__link">
                <a href="#" class="media__p">LinkedIn </a>
                <img src="./src/linkedin-logo.png" class="media__p-logo">
            </div>

            <div class="media__link">
                <a href="#" class="media__p">GitHub <img src="./src/github-logo.png" class="media__p-logo"></a>                    
            </div>
        </div>
    </div>
    `
    target.appendChild(containerEl);
}