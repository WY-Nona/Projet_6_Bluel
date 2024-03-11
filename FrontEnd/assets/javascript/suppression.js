import { fetchWorksData, deleteWork } from './api.js';
import { main, apiWork } from './script.js'

//Suppression d'un élément
export async function trashBtn(workId) {
    const works = await fetchWorksData();
    //Renvois l'ID pour procéder à la suppression dans les API
    await deleteWork(workId);
    apiWork();
}

//Suppression de tout les travaux
export async function deleteAllWorks() {
    const works = await fetchWorksData();
    const deleteAllWorkIds = [];

    for (const work of works) {
        await deleteWork(work.id);

        const deleteCard = document.querySelector(`#project-${work.id}`);
        deleteCard.remove();
    }
    return deleteWorkIds;
}