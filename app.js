const btnHamburger = document.querySelector('.hamburger');
const menuPanel = document.querySelector('.menu-panel');
const menuLinks = document.querySelectorAll('.menu-panel a');
const btnCloseMenu = document.querySelector('.btn-close-menu');
const btnContact = document.querySelector('.btn-contact button');
const contactFormPanel = document.querySelector('.contact-form');
const btnBackForm = document.querySelector('.btn-back-form');
const contactFormEl = document.querySelector('.contact-form form');
const frame = document.querySelector('.frame'); // Valime HTML elemendi, millel on klass 'frame'
const frameImage = frame.querySelector('img'); // Valime pildi frame sees
const img = ['1.webp', '2.webp', '3.webp','4.webp', '5.webp', '6.webp']; // Piltide nimede massiiv

let currentImageIndex = 0; // Hoiab praegu valitud pildi indeksit, alustades esimesest (indeks 0)

frame.addEventListener('click', ()=> { // Lisab sündmuse kuulaja, mis käivitab funktsiooni, kui pildile klikitakse
    currentImageIndex++; // Suurendab indeksi väärtust ühe võrra

    if(currentImageIndex >= img.length) { // Kui indeks jõuab lõppu, siis...
        currentImageIndex = 0; // ...muudab indeksi tagasi 0-ks (algusesse)
    }

    frameImage.src = 'img/' + img[currentImageIndex]; // Muudab pildi 'src' atribuuti, et näidata järgmist pilti

});


btnHamburger.addEventListener('click', ()=> { // Lisame btnHamburger nupule sündmuse jälgimise, mis reageerib klikkimisele
    menuPanel.classList.toggle('active'); // Kasutame toggle meetodit, et lisada või eemaldada klass active menüü paneelilt
});


document.addEventListener('click', (event) => { // Lisame sündmuse jälgimise kogu dokumendile, et registreerida kõik klikkimised
    if(!menuPanel.contains(event.target) && !btnHamburger.contains(event.target)) { // Kontrollime, kas klikk toimus väljaspool menüü paneeli ja nuppu
        menuPanel.classList.remove('active');  // Eemaldame klassi active menüü paneelist, et sulgeda see
    } 

});

menuLinks.forEach((link)=>{ // Käime läbi kõik lingid, mis asuvad menuLinks muutujas

    link.addEventListener('click', ()=> { // Lisame iga lingi jaoks sündmuse jälgimise, mis reageerib klikkimisele
        menuPanel.classList.remove('active'); // Eemaldame klassi active menüü paneelilt, et sulgeda see
    });

});

btnCloseMenu.addEventListener('click', () => {
    menuPanel.classList.remove('active');
});

btnContact.addEventListener('click', () => {
    contactFormPanel.classList.add('active');
});

btnBackForm.addEventListener('click', () => {
    contactFormPanel.classList.remove('active');
});

contactFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    contactFormPanel.classList.remove('active');
});