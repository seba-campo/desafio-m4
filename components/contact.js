function contactComponent(target) {
    const componentEl = document.createElement("div");
    componentEl.innerHTML = `
    <div class="contact__div-container">
            
        <h2 class="contact__title">Contacto</h2>

        <div class="contact-form">
            
            <label for="" class="contact-form__label-input">
                <p>Nombre</p>
                <input type="text" name="nombre" class="contact-form__input">
            </label>
            
            <label for="email" class="contact-form__label-input">
                <p>Email</p>
                <input type="text" name="email" class="contact-form__input">
            </label>
            
            <label for="mensaje" class="contact-form__label-input">
                <p>Mensaje</p>
                <textarea name="mensaje" class="contact-form__input-textarea"></textarea>
            </label>

            <button class="contact__send-button">Enviar</button>
        </div>

    </div>
    `;

    target.appendChild(componentEl);
}
