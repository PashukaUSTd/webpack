import './assets/scss/bundle.scss';
import HelloWorldButton from './components/hello-world-button/hello-world-button';
import Heading from './components/heading/heading';

const helloWorldButton = new HelloWorldButton;
const heading = new Heading();

heading.render();
helloWorldButton.render();
