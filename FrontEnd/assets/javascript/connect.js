import { modalTop, loginLink, projectChange, hideFilter, upGalleryStyle, openEditPanel } from './constants.js';
import { exitPanelCross, returnBtn, exitPanelCross2, deleteAllWorksButton, AddImageButton , btnSendImage, token } from './constants.js';
import { openPanel, closePanel, displayWorksInPanel, openAddingPanel, returnBtnPanel, previewImage } from './edit.js' ;
import { generatedBtn } from './edit.js';
import { deleteAllWorks } from './suppression.js';

//// Gère le menu si connecté //// 
function connected() {
  // Ouvre la modale si clic sur Mode édition ou Modifier
  modalTop.classList.replace('disconnected_and_hidden', 'connected_and_visible');
  projectChange.classList.replace('disconnected_and_hidden', 'connected_and_visible');

  // Cache les filtres si connecté
  hideFilter.classList.replace('visible', 'hidden');
  upGalleryStyle.classList.replace('gallery_disconnected', 'gallery_connected');

  //Affiche le logout à la place du login
  loginLink.classList.replace('loginLink', 'logoutLink'),
  loginLink.innerHTML = '<a class="btn_deconnexion" href="#">logout</a>';
}

// Cache la modale si déconnecté
function disconnected() {
  hideFilter.classList.replace('hidden', 'visible');
}

//Déconnexion
function logout() {
  function handleLogOut(event) {
    event.preventDefault();
    localStorage.clear();
    location.reload();
  }
  const btnLogOut = document.querySelector('.btn_deconnexion');
  btnLogOut.addEventListener('click', handleLogOut); 
  
}

// Gére fonctions si connexion 
export function tokenLogin() {
 // Si connecté
      if (token != null) {
        // Change visibilité de la page après la connexion
        connected();
        console.log("Connecté");
  
        // Gère la déconnexion
        logout();

        // Affiche les travaux
        displayWorksInPanel();
      
        // Gère les boutons générés ( Suppression-->[!] et deplacement[non-fonctionnel])
        generatedBtn();
        //Gère la Suppression de tous les travaux
        deleteAllWorksButton.addEventListener('click', deleteAllWorks );
        // Gère la fenètre pour ajouter des travaux 
        btnSendImage.addEventListener('click', previewImage);
        AddImageButton.addEventListener('click', openAddingPanel);

      } else {
        //Affiche la page index si déconnecté
        disconnected();
      }
}

// Ouvre et ferme la fenêtre de modification des travaux
openEditPanel.addEventListener('click', openPanel);
projectChange.addEventListener('click', openPanel);
exitPanelCross.addEventListener('click', closePanel);
exitPanelCross2.addEventListener('click', closePanel);
returnBtn.addEventListener('click', returnBtnPanel);