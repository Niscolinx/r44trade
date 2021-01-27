import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { LastLocationProvider } from 'react-router-last-location'

import App from './containers/App'


const app = (
        <BrowserRouter>
            <LastLocationProvider>
                <App />
            </LastLocationProvider>
        </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'))
