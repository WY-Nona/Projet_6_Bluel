import { panelEditWork, edditionGaleriePanel, addingWorkPanel, panelAddingWork,galerieEdit, inputImg, imgPreview, formImg } from './constants.js';
import { fetchWorksData} from './api.js';
import { trashBtn } from './suppression.js';

//Ouverture
export function openPanel() {
    panelEditWork.classList.replace('hidden', 'visible');
}

//Fermeture
export function closePanel() {
    panelEditWork.classList.replace('visible', 'hidden');
    panelAddingWork.classList.replace('visible', 'hidden');
    
    edditionGaleriePanel.classList.remove('visible', 'hidden');
    panelAddingWork.classList.remove('visible', 'hidden');
}

//Géneration des cartes 
export async function displayWorksInPanel() {

    galerieEdit.innerHTML = '';
    const works = await fetchWorksData();

    for (const work of works) {
        //Déclaration div à generer dans le html
        let figure = document.createElement('figure');   // Déclaration d'une figure
        let image = document.createElement('img');   // Déclaration d'une balise img 
        let deleteBtn = document.createElement('div');
        let deleteBtnIcon = document.createElement('i');

        // Classification
        figure.setAttribute('id',"secondCardProject-" + work.id);
        figure.setAttribute('class', 'cardsPanel');
        image.setAttribute('class', 'cardsPanelImage');
        image.setAttribute('src', work.imageUrl);
        image.crossOrigin = "Anonymous"; 
        deleteBtn.setAttribute('class', 'deleteBtn');
        deleteBtnIcon.setAttribute('class','fa-solid fa-trash-can');
        deleteBtnIcon.setAttribute('id', work.id);
        
        // Génération
        galerieEdit.appendChild(figure);  // Génération de figure à la div gallery
        figure.appendChild(image);  // Génération de la balise img à la figre
        figure.appendChild(deleteBtn);
        deleteBtn.appendChild(deleteBtnIcon);
    }
}

// Effectue une vérification de la génération d'éléments AVANT la suppression
export function generatedBtn() {
    document.addEventListener('click', (event) => {
        // Vérifie si l'élément existe
        if (event.target.classList.contains('fa-trash-can')) {
            trashBtn(event.target.id);
        }
        if (event.target.classList.contains('fa-arrows-up-down-left-right')) {
            mouveBtn();
        }
      });
}


// ferme le menu de suppresion et ouvre celui d'ajout de travaux
export function openAddingPanel() {
    edditionGaleriePanel.classList.add('hidden');
    addingWorkPanel.classList.remove('hidden');
}   

// Flèche de retour au menu de suppression
export function returnBtnPanel() {
    edditionGaleriePanel.classList.remove('hidden');
    addingWorkPanel.classList.add('hidden');
}

// Preview Image
export function previewImage() {
    inputImg.addEventListener('change', (event) => {
        const file = event.target.files[0];
        const objectUrl = URL.createObjectURL(file);
        imgPreview.src = objectUrl;
    });
    formImg.style.display = "none";
    imgPreview.style.display = "block";

}
