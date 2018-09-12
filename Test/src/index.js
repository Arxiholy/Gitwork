import React from 'react';
import ReactDOM from 'react-dom';
import './Components/main.css';
import App from './Components/App';

const place = document.getElementById("root");
function main(){
    ReactDOM.render(
        <div className="field">
            <App  Task="Что вас интересует?" Way="Маршруты" Stopspoints="Остановки" />
        </div>,
        place
    );
}
setInterval(main,1000);