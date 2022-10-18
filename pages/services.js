function main(){
    const footerSection = document.querySelector(".footer");
    const contactSection = document.querySelector(".contact");
    const headerSection = document.querySelector(".header");
    const servicesSection = document.querySelector(".services__list");
    


    footerComponent(footerSection);
    // contactComponent(contactSection);
    navbarComponent(headerSection, "Services", false);
    serviceComponent(servicesSection);
}

main();