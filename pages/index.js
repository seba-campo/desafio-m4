function main() {
    const footerSection = document.querySelector(".footer");
    const contactSection = document.querySelector(".contact");
    const headerSection = document.querySelector(".header");
    
    footerComponent(footerSection)    
    
    contactComponent(contactSection)
    
    navbarComponent(headerSection)
    // listenerHamburguer();
}

main();