import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"
import { FormContainer, PaymentFormContainer } from "./payment-form.styles"

const BUTTON_TEXT = 'Pay Now'
const FORM_TITLE = 'Card Payment'

export const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const paymentHandler = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;
        
    }

    return (
        <PaymentFormContainer>
            <FormContainer>
                <h2>{FORM_TITLE}</h2>
                <CardElement/>
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>{BUTTON_TEXT}</Button>
            </FormContainer>
        </PaymentFormContainer>
    )
}