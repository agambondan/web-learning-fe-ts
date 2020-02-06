import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StoreProvider} from "./publish/reducers/user.reducer";
import {PublishStoreProvider} from "./publish/reducers/article.reducer";

ReactDOM.render(
    <PublishStoreProvider>
        <StoreProvider>
            <App/>
        </StoreProvider>
    </PublishStoreProvider>

    , document.getElementById('root'));
