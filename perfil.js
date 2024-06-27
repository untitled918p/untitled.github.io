// Simulación de datos de usuario
let user = null;

function signIn() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Validar email
    if (!email.endsWith('@gmail.com')) {
        displayError('Por favor ingrese un correo válido de Gmail.');
        return;
    }

    // Validar longitud de la contraseña
    if (password.length < 4 || password.length > 16) {
        displayError('La contraseña debe tener entre 4 y 16 caracteres.');
        return;
    }

    // Simulación de inicio de sesión exitoso
    user = {
        email: email,
        photoURL: 'ruta/a/imagen.png'  // Aquí deberías ajustar la ruta de la imagen
    };

    // Guardar usuario en localStorage
    localStorage.setItem('user', JSON.stringify(user));

    // Mostrar foto de perfil y mensaje de éxito
    displayProfile();
}

function displayProfile() {
    const loginContainer = document.getElementById('loginContainer');
    const profileContainer = document.getElementById('profileContainer');
    const profilePhoto = document.getElementById('profilePhoto');

    if (user) {
        // Mostrar el contenedor del perfil y ocultar el de inicio de sesión
        loginContainer.style.display = 'none';
        profileContainer.style.display = 'block';

        // Mostrar foto de perfil
        profilePhoto.src = user.photoURL;

        // Mostrar foto de perfil en el menú de navegación
        displayUserPhoto(user.photoURL);
    }
}

function displayUserPhoto(photoURL) {
    const photoContainer = document.getElementById('photo-container');
    if (photoContainer) {
        photoContainer.innerHTML = `<img src="${photoURL}" alt="Foto de perfil">`;
    }
}

function displayError(message) {
    const loginContainer = document.getElementById('loginContainer');
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = message;
    loginContainer.appendChild(errorMessage);
}

// Comprobar sesión almacenada localmente al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        user = JSON.parse(storedUser);
        displayProfile();
    }
});
