import { connectionForm, usernameInput, passwordInput, token , errorMessage} from './constants.js';
import { postLogin } from "./api.js";

// {
//     email: sophie.bluel@gmail.com
//     mdp: "SophieBluel"
// }

function login() {

    // Gestion événement pour le soumission du formulaire
    connectionForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        let dataLogin = {
            email: username, 
            password: password,
        }
        
        const response = await postLogin(dataLogin);

        console.log(response);

        if (response && response.token) {
            localStorage.setItem('token', response.token);
            location.href = "index.html";
        } else {
            errorMessage.classList.remove('hidden');
            console.error('Unexpected response:', response);
        }
    });
}

login();