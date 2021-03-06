import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Registration from './components/Registration';
import { Provider } from 'react-redux'
import store from './store'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Provider store={store}>
<Registration />
</Provider>, document.getElementById('root'));
registerServiceWorker();
