import Andrew from './andrew.jpg';
import Sand from '/home/ida/Pictures/mine/pexels-marcelo-jaboo-696407.jpg'
import altText from './altText.txt'

function addImage() {
    const img = document.createElement('img');
    const img2 = document.createElement('img');
    img.alt = altText;
    img.width = 300;
    img.src = Andrew;

    img2.alt = 'Песочек';
    img2.width = 1440;
    img2.src = Sand;

    const body = document.querySelector('body');
    body.appendChild(img);
    body.appendChild(img2);
}

export default addImage;
