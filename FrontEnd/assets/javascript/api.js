// Appels d'API

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
