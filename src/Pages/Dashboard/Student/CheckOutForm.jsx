import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";


const CheckOutForm = () => {
    const [error,setError] =useState('')
    // const [clientSecret,setClientSecret] =useState('')
    const [transactionId,setTransactionId] = useState('')
    const stripe = useStripe()
    const element =useElements()
    // const axiosSecure =useAxiosSecure()
    const {user} =useAuth()
    
    
    const navigate=useNavigate()

    
    const handleSubmit=async (event)=>{
        event.preventDefault()
        if(!stripe || !element){
            return
        }

        const card= element.getElement(CardElement)

        if(card===null){
            return
        }
        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card
        })
        if (error) {
            console.log('payment error', error);
            setError(error.message)
          } else {
            console.log('Payment Method', paymentMethod);
            setError('')
          }

          // confirm payment
          const {paymentIntent,error:confirmError} = await stripe.confirmCardPayment({
            payment_method:{
              card:card,
              billing_details:{
                email:user?.email || 'anonymous',
                name:user?.displayName || 'anonymous'
              }
            }
           
          })
          if (confirmError) {
            console.log("confirm Error",confirmError)
          }
          else{
            console.log('payment Intent',paymentIntent)
            if(paymentIntent.status==="succeeded"){
              console.log('transaction id',paymentIntent.id)
              setTransactionId(paymentIntent.id)
            }
          }

          // save payment to database
          const payment={
            email:user.email,
           
            transactionId:paymentIntent.id,
            date:new Date,
            
            status:"pending"


          }
          const res= await axios.post('/payment',payment)
          console.log('payment save',res.data)
        
          if(res.data?.paymentResult?.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Thank you.",
              text:"Payment added successfully.",
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/dashboard/payment-history')
          }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-sm btn-primary my-5" type="submit" disabled={!stripe }>
        Pay
      </button>
      <p className="text-red-600 font-medium">{error}</p>
      {transactionId&& <p className="text-green-600"> Your transaction id:{transactionId}</p>}
        </form>
    );
};

export default CheckOutForm;