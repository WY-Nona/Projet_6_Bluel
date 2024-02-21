import {gallery, filtersElement} from './constants.js';


fetch("http://localhost:5678/api/works")
.then(response=>response.json())
.then(data=>{
  console.log(data)
})
  // Génère les cartes des travaux sur l'index
function displayWorkCards(works) {
  gallery.innerHTML = '';
  
  return works.map(work => {
    //Déclaration div à generer dans le html
    let figure = document.createElement('figure');   // Déclaration d'une figure
    let image = document.createElement('img');   // Déclaration d'une balise img 
    let figcaption = document.createElement('figcaption');  // Déclaration d'une balise figcaption

    // Ajout
    figure.setAttribute('id',"project-" + work.id);   // Ajout de l'id de l'API work à la balise figure
    figure.setAttribute('class', 'visible');
    figcaption.textContent = work.title;   // Ajout du texte de l'API work à la balise figcaption
    image.setAttribute('src', work.imageUrl);
    image.crossOrigin = "Anonymous";   // Ajout de l'url de l'API work à la balise img
    // Génération

    gallery.appendChild(figure);  // Génération de figure à la div gallery
    figure.appendChild(image);  // Génération de la balise img à la figre
    figure.appendChild(figcaption);   // Génération de la balise figcaption à la figure
  }) 
}
//Appel les catégories liés aux travaux
export async function fetchCategoriesData() {
  try {
      const url = 'http://localhost:5678/api/categories';
      const response = await fetch(url);

      return await response.json();
  } catch (error) {
      console.log('===> error', error);
  }
}

// Génere les filtres en fonction de leurs categories au chargement
  function displayWorkFilters(categories, parent) {
  // Pour chaque catégorie, créer un élément HTML de type div pour représenter le filtre
    return categories.map(category => {
      const div = document.createElement('div');
      div.setAttribute('id', category.id);
      div.setAttribute('class', 'filtre filter-button');
      div.innerHTML = category.name;
      parent.appendChild(div);
    });
  }
// Appel les données des travaux
export async function fetchWorksData() {
  try {
      const url = 'http://localhost:5678/api/works';
      const response = await fetch(url);

      return await response.json();
  } catch (error) {
      console.log('===> error', error);
  }
}




// Gére principalement les filtres, l'affichage des travaux et modifie le style lors du clic
  export async function main() {
    // Vérifie si connecté
    // tokenLogin();

    // Récupére les données des travaux et des catégories depuis le serveur, et afficher les cartes de travail et les filtres
    const works = await fetchWorksData();
    const categories = await fetchCategoriesData();
    console.log(works);
    displayWorkCards(works);
    displayWorkFilters(categories, filtersElement);

    // Ajoute un écouteur d'événements de clic à chaque bouton de filtre
    const filterButtons = document.querySelectorAll('.filter-button');
    for (let btn of filterButtons) {
      btn.addEventListener('click', function(e) {
        // Ajoute la classe "selection" au filtre sélectionné et la retire des autres filtres
        for (let btn of filterButtons) {
          btn.classList.toggle('selection', btn === e.target);
        }

        // Filtre les données des travaux en fonction de la catégorie sélectionnée et affiche les cartes de travail filtrées
        const data = (e.target.id === 'all') ? works : works.filter(work => work.categoryId == e.target.id);
        displayWorkCards(data);
      });
    }

  }

main();

export async function apiWork() {
  const works = await fetchWorksData();
  
  displayWorkCards(works);
  displayWorksInPanel();
}