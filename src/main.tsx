import '@/stores/store'
import React from 'react'
import {FocaProvider} from "foca";
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import App from "@/app"
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

const render = () => {
    const root = ReactDOM.createRoot(document.getElementById('root')!)
    
    root.render(
        <React.StrictMode>
            <FocaProvider>
                <Router>
                    <ConfigProvider locale={zhCN}>
                        <App/>
                    </ConfigProvider>
                </Router>
            </FocaProvider>
        </React.StrictMode>
       
    )
}
render()
