import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useState } from "react"
import { useSelector } from "react-redux"
import { selectCartTotal } from "../../store/cart/cart.selector"
import { selectCurrentUser } from "../../store/user/user.selector"
import { BUTTON_TYPE_CLASSES } from "../button/button.component"
import { FormContainer, PaymentButton, PaymentFormContainer } from "./payment-form.styles"

const BUTTON_TEXT = 'Pay Now'
const FORM_TITLE = 'Card Payment'

export const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal)
    const currentUser = useSelector(selectCurrentUser)
    const [isPaymentLoading, setIsPaymentLoading] = useState(false)

    const paymentHandler = async (e) => {
        setIsPaymentLoading(true);
        e?.preventDefault();
        if (!stripe || !elements) return;
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( { amount: amount * 100 } )
        }).then(res => res.json());

    const { paymentIntent: { client_secret } } = response;
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
                name: currentUser ? currentUser.displayName : 'Guest'
            }
        }
    })

    setIsPaymentLoading(false);

    if (paymentResult.error) console.log(paymentResult.error)
    else if (paymentResult.paymentIntent.status === 'succeeded') console.log('Payment Succeeded')
    }

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>{FORM_TITLE}</h2>
                <CardElement/>
                <PaymentButton isLoading={isPaymentLoading} buttonType={BUTTON_TYPE_CLASSES.inverted}>{BUTTON_TEXT}</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
}