// Verifica si hay un usuario almacenado localmente
const user = JSON.parse(localStorage.getItem('user'));
if (user) {
    // Si hay un usuario, muestra la foto de perfil en la esquina
    const photoContainer = document.getElementById('photo-container');
    photoContainer.innerHTML = `<img src="${user.photoURL}" alt="Foto de perfil de Google">`;
}
