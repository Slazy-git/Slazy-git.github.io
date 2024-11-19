const boutons = document.querySelectorAll('.bouton');
const imagePrincipale = document.querySelector('.image-principale');

boutons.forEach(bouton => {
    bouton.addEventListener('click', () => {
        const imageSource = bouton.getAttribute('data-image');
        imagePrincipale.src = imageSource;
    });
});