//Variables

    // Filtre index
        export const filtersElement = document.querySelector('.filters');
    
    // Stokage du token
        export const token = localStorage.getItem('token');

    // Formulaire
        export const gallery = document.querySelector('.gallery');
        export const form = document.querySelector('#addingWorkForm');
        export const panelAddingWork = document.querySelector('#panelAddingWork');
        export const btnAddWork = document.querySelector('#btn-AddWork');
        export const btnSendImage = document.querySelector('#textImputLabel');
        export const inputImg = document.getElementById('ImputImg');
        export const imgPreview = document.getElementById('ImgPreview');
        export const formImg = document.querySelector(".form-img");

    // Page login
        export const connectionForm = document.querySelector('#login-form');
        export const usernameInput = document.querySelector('#username');
        export const passwordInput = document.querySelector('#password');
        export const errorMessage = document.querySelector('#error-message');
        

    // Bouton de retour de la modale
        export const returnBtn = document.querySelector('.return');
 
    // Affiche / Caches des élément si connecté ou non
        export const loginLink = document.querySelector('.loginLink');
        export const hideFilter = document.querySelector('.filters');
        export const upGalleryStyle = document.querySelector('.gallery');
        export const modalTop = document.querySelector('#pannelConnection');
        export const projectChange = document.querySelector('.change_projets');

    // Ouvre la fenêtre des travaux
    export const openEditPanel = document.querySelector('.open-edit');
    export const panelEditWork = document.querySelector('#pannelEditWork');

    // Affiche les travaux
    export const galerieEdit = document.querySelector('.galerieEdit');

    // Ferme la fenetre
    export const exitPanelCross = document.querySelector('.cross');
    export const exitPanelCross2 = document.querySelector('.cross2');

    // Suppresion
    export const deleteAllWorksButton = document.querySelector('.deleteGalerie');

    // Ajout 
        export const AddImageButton = document.querySelector('.addImg');
        export const edditionGaleriePanel = document.querySelector('#galeriEditWork');
        export const addingWorkPanel = document.querySelector('#panelAddingWork');