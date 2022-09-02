import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import {
    createUserDocumentFromAuth,
    onAuthStateChangedListener,
    retrieveDataFromUserSnapshot
} from './utils/firebase/firebase.utils'
import Navigation from './routes/navigation/navigation.component'
import Home from './routes/home/home.component'
import Shop from './routes/shop/shop.component'
import { BASE_ROUTES } from './routes/routes'
import Authentication from './routes/authentication/authentication.component'
import Checkout from './routes/checkout/checkout.component'
import { setCurrentUser } from './store/user/userSlice'
import { useAppDispatch } from './store/hooks'

const App = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(async user => {
            if (user) {
                const userSnapshot = await createUserDocumentFromAuth(user)
                if (userSnapshot) {
                    const currentUser = retrieveDataFromUserSnapshot(userSnapshot)
                    dispatch(setCurrentUser(currentUser))
                }
            }
        })
        return unsubscribe
    }, [])

    return (
        <Routes>
            <Route path={BASE_ROUTES.MAIN} element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path={`${BASE_ROUTES.SHOP}/*`} element={<Shop />} />
                <Route path={BASE_ROUTES.AUTH} element={<Authentication />} />
                <Route path={BASE_ROUTES.CHECKOUT} element={<Checkout />} />
            </Route>
        </Routes>
    )
}

export default App
