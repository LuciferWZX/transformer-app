import '@/stores/store'
import React from 'react'
import {FocaProvider} from "foca";
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import App from "@/app"

const render = () => {
    const root = ReactDOM.createRoot(document.getElementById('root')!)
    
    root.render(
        <React.StrictMode>
            <FocaProvider>
                <Router>
                    <App/>
                </Router>
            </FocaProvider>
        </React.StrictMode>
    )
}
render()
