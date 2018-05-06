import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
require('../css/style.css');
require('../css/querys.css');
require('../css/donut.css');
require('../css/animate.css')


ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,
   document.getElementById('root'));
