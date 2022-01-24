import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';

import store from './redux/reduxStore'


ReactDOM.render(
     //Оборачиваем всё приложение в Provider чтобы во всех дочерних элементах был доступ к данным
     <Provider store={store} > 
       <App />
     </Provider>,
   
  document.getElementById('root')
);


