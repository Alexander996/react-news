import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root'
import {articles} from "./fixtures";

ReactDOM.render(<Root articles={articles} />, document.getElementById('root'));
