import Andrew from './andrew.jpg';

function addImage() {
    const img = document.createElement('img');
    img.alt = 'Андрей отгребает';
    img.width = 300;
    img.src = Andrew;

    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;
