import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Bulgogi, Bibimbap } from './Korean.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
        <Bulgogi />
        <Bibimbap />
    </React.StrictMode>
);
