import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistor, store } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Elements } from '@stripe/react-stripe-js'
import { stripePromise } from './services/stripe/stripe.utils'
import { FirebaseServicesProvider } from './services/firebase/FireBaseContext'
import { FirebaseAppProvider } from 'reactfire'
import { firebaseConfig } from './services/firebase/utils'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
    <React.StrictMode>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <FirebaseServicesProvider>
                <Provider store={store}>
                    <PersistGate persistor={persistor}>
                        <BrowserRouter>
                            <Elements stripe={stripePromise}>
                                <App />
                            </Elements>
                        </BrowserRouter>
                    </PersistGate>
                </Provider>
            </FirebaseServicesProvider>
        </FirebaseAppProvider>
    </React.StrictMode>
)
