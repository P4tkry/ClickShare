import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {ConfigProvider} from "antd";
import './assets/style.css';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <ConfigProvider theme={{token: {colorPrimary: '#1982C4'}}}>
        <App/>
    </ConfigProvider>
);