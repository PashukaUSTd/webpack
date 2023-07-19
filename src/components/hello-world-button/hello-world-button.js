import './hello-world-button.scss'

class HelloWorldButton {
    buttonCssClass = 'hello-world-button';
    paragraphCssClass = 'hello-world-text';
    wrapperCssClass = 'hello-world-wrapper';
    blockCssClass = 'hello-world-block';
    render() {
        const button = document.createElement('button');
        const wrapper = document.createElement('div');
        const body = document.querySelector('body');

        button.innerHTML = 'Hello world';
        button.classList.add(this.buttonCssClass);
        wrapper.classList.add(this.wrapperCssClass);

        body.appendChild(button);
        body.appendChild(wrapper);

        button.onclick = () => {
            const block = document.createElement('div');
            const p = document.createElement('p');

            p.innerHTML = 'Hello world';
            p.classList.add(this.paragraphCssClass);
            block.classList.add(this.blockCssClass);

            block.appendChild(p);
            wrapper.appendChild(block);
        }
    };
}

export default HelloWorldButton;
