import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/button/button.component'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector'
import { useAppSelector } from '../../store/hooks'
import { selectCurrentUser } from '../../store/user/user.selector'
import { Payment } from '../payment/Payment'
import { BASE_ROUTES } from '../routes'
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles'

const Checkout = () => {
    const navigate = useNavigate()
    const cartItems = useSelector(selectCartItems)
    const totalPrice = useSelector(selectCartTotal)
    const currentUser = useAppSelector(selectCurrentUser)
    const onLoginClick = () => {
        navigate(`/${BASE_ROUTES.AUTH}`)
    }

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <Total>Total: ${totalPrice}</Total>
            {currentUser ? <Payment /> : <Button onClick={onLoginClick}>Please login to pay</Button>}
        </CheckoutContainer>
    )
}

export default Checkout
