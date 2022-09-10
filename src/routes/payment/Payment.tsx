import { useSelector } from 'react-redux'
import { PaymentForm } from '../../components/payment-form/payment-form.component'
import { selectCartTotal } from '../../store/cart/cart.selector'

export const Payment = () => {
    const totalPrice = useSelector(selectCartTotal)
    return (
        <div>
            <h3>${totalPrice}</h3>
            <PaymentForm />
        </div>
    )
}
