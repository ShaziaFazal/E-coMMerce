import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';
const StripeContainer = () => {
    const PUBLIC_KEY = "pk_test_51OCSWgLLMxTJm1LDqO9W4jqIVXZan5KIoJlX92Is0cf0WAIBEFKE316bbrLpwhHXxeOfTu0vCLviePQ4DsmBEym6004TCu9uJC";
    const stripeTestPromise = loadStripe(PUBLIC_KEY);
  return (
    <Elements stripe={stripeTestPromise} >
        <PaymentForm/>
    </Elements>
  )
}

export default StripeContainer