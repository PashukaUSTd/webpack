import './heading.scss';

class Heading {
    render() {
        const h1 = document.createElement('h1');
        const header = document.createElement('header');
        const body = document.querySelector('body');

        h1.innerHTML = 'Pussy boy is getting punished';
        header.appendChild(h1);
        body.appendChild(header);
    }
}

export default Heading;
