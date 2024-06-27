// Función para crear una cuenta
document.getElementById('createAccountButton').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const profilePhoto = document.getElementById('photo').src; // Assuming the photo element has id 'photo'

    // Validación del correo electrónico
    if (!email.endsWith('@gmail.com')) {
        alert('Por favor, use una dirección de correo electrónico de Gmail válida.');
        return;
    }

    // Validación de la contraseña
    if (password.length < 4 || password.length > 16) {
        alert('La contraseña debe tener entre 4 y 16 caracteres.');
        return;
    }

    // Guardar los datos del usuario en localStorage
    const userData = {
        email: email,
        password: password,
        photo: profilePhoto
    };

    localStorage.setItem('user', JSON.stringify(userData));

    // Mostrar mensaje de éxito y foto de perfil
    const crearCuentaDiv = document.getElementById('crearCuenta');
    const profilePhotoDiv = document.getElementById('profile-photo');
    crearCuentaDiv.style.display = 'block';
    profilePhotoDiv.innerHTML = `<img src="${profilePhoto}" alt="Foto de perfil de usuario">`;

    alert('¡Cuenta creada con éxito! Ahora puedes iniciar sesión.');

    // Limpiar campos después de crear la cuenta (opcional)
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
});

// Función para iniciar sesión
document.getElementById('loginButton').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Obtener los datos del usuario desde localStorage
    const userData = JSON.parse(localStorage.getItem('user'));

    // Validar si el usuario y la contraseña coinciden
    if (userData && userData.email === email && userData.password === password) {
        alert('¡Inicio de sesión exitoso!');
        window.location.href = 'index.html'; // Redirigir a la página principal
    } else {
        alert('Correo electrónico o contraseña incorrectos.');
    }
});

// Función para mostrar la foto de perfil en el menú de navegación
function displayUserPhoto() {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData && userData.photo) {
        const profilePhotoContainer = document.getElementById('profile-photo-container');
        profilePhotoContainer.innerHTML = `<img src="${userData.photo}" alt="Foto de perfil de usuario">`;
        const crearCuentaDiv = document.getElementById('crearCuenta');
        const profilePhotoDiv = document.getElementById('profile-photo');
        crearCuentaDiv.style.display = 'block';
        profilePhotoDiv.innerHTML = `<img src="${userData.photo}" alt="Foto de perfil de usuario">`;
    }
}

// Llamar a la función para mostrar la foto de perfil al cargar la página
window.onload = displayUserPhoto;
