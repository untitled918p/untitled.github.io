document.getElementById('createAccountButton').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const profilePhoto = document.getElementById('photo').src; // Assuming the photo element has id 'photo'

    if (!email.endsWith('@gmail.com')) {
        alert('Por favor, use una dirección de correo @gmail.com.');
        return;
    }

    if (password.length < 4 || password.length > 16) {
        alert('La contraseña debe tener entre 4 y 16 caracteres.');
        return;
    }

    if (!profilePhoto) {
        alert('Por favor, suba una foto de perfil.');
        return;
    }

    const userData = {
        email: email,
        password: password,
        photo: profilePhoto
    };

    localStorage.setItem('user', JSON.stringify(userData));

    document.getElementById('email').style.display = 'none';
    document.getElementById('password').style.display = 'none';
    document.getElementById('photo-upload-container').style.display = 'none';
    document.getElementById('createAccountButton').style.display = 'none';

    const successMessage = document.createElement('p');
    successMessage.textContent = '¡Has creado una cuenta gratis!';
    document.body.appendChild(successMessage);
});
