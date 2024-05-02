const user = JSON.parse(localStorage.getItem('user'));
if (user) {
    
    const photoContainer = document.getElementById('photo-container');
    photoContainer.innerHTML = `<img src="${user.photoURL}" alt="Foto de perfil de Google">`;
}
