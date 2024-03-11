// Appels d'API
import {token, errorMessage } from './constants.js';

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

// Gère la connexion et l'autorisation des modifications des données
export async function postLogin(data) {
    try {
        const url = 'http://localhost:5678/api/users/login';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if(response.ok) {
            console.log('tout est ok');
            return await response.json();
        }
    } catch (error) {
        
        console.log('===> error', error);
        throw new Error("Identifiant ou mot de passe incorrect")
    }
}

// Supprime les données
export async function deleteWork(workId) {
    try {
        // const token = localStorage.getItem('token');
        const url = `http://localhost:5678/api/works/${workId}`;
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        if (!response.ok) {
            throw new Error('La suppression a échoué');
        }
        console.log('La carte a été supprimée avec succès');
    } catch (error) {
        console.log('===> error', error);
        throw new Error("Erreur dans la suppresion")
    }
}