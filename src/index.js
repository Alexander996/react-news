import React from 'react';
import ReactDOM from 'react-dom';
import ArticleList from './ArticleList'
import {articles} from "./fixtures";

ReactDOM.render(<ArticleList articles={articles} />, document.getElementById('root'));
