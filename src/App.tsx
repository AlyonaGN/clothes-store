import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import {
    createUserDocumentFromAuth,
    onAuthStateChangedListener,
} from './services/firebase/firebase.utils'
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
        const unsubscribe = onAuthStateChangedListener(async (user) => {
            let userData = null
            if (user) {
                userData = await createUserDocumentFromAuth(user)
            }
            if (userData) {
                dispatch(setCurrentUser(userData))
            }
        })
        return unsubscribe
        // ignoring the eslint rule to make it clear that the useEffect should be run on mount and clean up on unmount
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
