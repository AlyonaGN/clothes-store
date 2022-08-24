import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { StripeCardElement } from "@stripe/stripe-js"
import { FormEventHandler, useState } from "react"
import { selectCartTotal } from "../../store/cart/cart.selector"
import { useAppSelector } from "../../store/hooks"
import { selectCurrentUser } from "../../store/user/user.selector"
import { BUTTON_TYPE_CLASSES } from "../button/button.component"
import { FormContainer, PaymentButton, PaymentFormContainer } from "./payment-form.styles"

const BUTTON_TEXT = 'Pay Now'
const FORM_TITLE = 'Card Payment'

const isValidCardElement = (
    card: StripeCardElement | null
  ): card is StripeCardElement => card !== null;

export const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const amount = useAppSelector(selectCartTotal)
    const currentUser = useAppSelector(selectCurrentUser)
    const [isPaymentLoading, setIsPaymentLoading] = useState(false)

    const paymentHandler: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return
        }
        setIsPaymentLoading(true)
        const response = await fetch(
            '/.netlify/functions/create-payment-intent',
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ amount: amount * 100 })
            }
        ).then((res) => {
            return res.json()
        })

        const clientSecret = response.paymentIntent.client_secret

        const card = elements.getElement(CardElement)

        if (!isValidCardElement(card)) return

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card,
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest'
                }
            }
        })

        setIsPaymentLoading(false)

        if (paymentResult.error) {
            alert(paymentResult.error.message)
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment Successful!')
            }
        }
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