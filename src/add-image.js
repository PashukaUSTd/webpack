import Andrew from './andrew.jpg';
import Chair from '/home/ida/Pictures/mine/pexels-marcelo-jaboo-696407.jpg'
import altText from './altText.txt'

function addImage() {
    const img = document.createElement('img');
    const img2 = document.createElement('img');
    img.alt = altText;
    img.width = 300;
    img.src = Andrew;

    img2.alt = 'стул';
    img2.width = 1440;
    img2.src = Chair;

    const body = document.querySelector('body');
    body.appendChild(img);
    body.appendChild(img2);
}

export default addImage;
