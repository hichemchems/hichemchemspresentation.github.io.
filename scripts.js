/*!
* Start Bootstrap - Full Width Pics v5.0.6 (https://startbootstrap.com/template/full-width-pics)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
   // Récupération des éléments de modale
var modal = document.getElementById("myModal");
var contactModal = document.getElementById("mycontactModal");

// Récupération des éléments de fermeture
var closeModal = document.getElementsByClassName("close");

// Ouvrir la première modale lorsqu'on clique sur le bouton correspondant
document.getElementById("openModalBtn").addEventListener("click", function() {
    modal.style.display = "block";
});

// Ouvrir la deuxième modale lorsqu'on clique sur le bouton correspondant
document.getElementById("openContactModalBtn").addEventListener("click", function() {
    contactModal.style.display = "block";
});

// Fonction pour fermer les modales
function closeModals() {
    modal.style.display = "none";
    contactModal.style.display = "none";
}

// Fermer les modales lorsqu'on clique sur le bouton de fermeture
for (var i = 0; i < closeModal.length; i++) {
    closeModal[i].addEventListener("click", closeModals);
}

// Fermer les modales lorsqu'on clique en dehors de leur contenu
window.addEventListener("click", function(event) {
    if (event.target === modal || event.target === contactModal) {
        closeModals();
    }
});





