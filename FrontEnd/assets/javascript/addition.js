import { token, btnAddWork, galerieEdit, imgPreview, edditionGaleriePanel, panelAddingWork, form, formImg } from './constants.js';
import { apiWork } from './script.js';

const inputFile = document.getElementById("ImputImg");
const inputTitle = document.getElementById("title");
const inputSelect = document.getElementById("category");
const invalidForm = document.querySelector(".invalid-form");
//const btnAddWork = document.getElementById("btn-AddWork")


export function addingWork() {

    btnAddWork.addEventListener("click", (event) => {
        event.preventDefault();
    
        let formData = new FormData();
        formData.append("image", inputFile.files[0]);
        formData.append("title", inputTitle.value);
        formData.append("category", inputSelect.value);
        
        let requestAdd = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData
        };
        
        
        fetch('http://localhost:5678/api/works', requestAdd)
        .then((res) => {
            if (res.ok) {
                edditionGaleriePanel.classList.remove('hidden');
                edditionGaleriePanel.classList.add('visible');

                panelAddingWork.classList.remove('visible');
                panelAddingWork.classList.add('hidden');
                console.log('Projet ajouté');
                
                apiWork();
                galerieEdit.innerHTML = '';
                form.reset();

                imgPreview.src = "";
                imgPreview.style.display = "none";
                formImg.style.display = "flex";
                
            } else {
                invalidForm.innerHTML = "Veuillez remplir tous les champs du formulaires";
            }
        })
        .catch((error) => {
            console.log('Erreur lors de la requête fetch:', error);
        });
    });
}

//Appel de la fonction de rajout de projets
addingWork();