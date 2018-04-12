import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import App from './components/';
import store from './store';
import './index.css';
import 'antd/dist/antd.less';

// window.onbeforeunload = () => {
//     return "Dude, are you sure you want to leave? Think of the kittens!";
// }


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

registerServiceWorker();


