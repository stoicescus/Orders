import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
