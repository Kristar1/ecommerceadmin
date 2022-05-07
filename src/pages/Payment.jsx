import React from 'react'
import { useState, useEffect } from "react";
import { userRequest } from '../requestMethod';


const Payment = () => {
    const [payments, setPayments] = useState(null);


    useEffect(() => {
        const getPayments= async ()=>{
            try {
                const res= await userRequest.get('/payments');
console.table(res.data)
                setPayments(res.data)
            } catch (error) {
                console.log(error)
        
            }
        }
        getPayments();
       })

  return (
   <div className="payments">
       <h1>Payments</h1>
       {payments?.map((payment)=>(
       <div className="paymentCard">
           <div className="detailColumn">
            <p><p className="bold"> Amount: </p>{payment?.payload?.payment?.entity.amount /100}  <span>{payment?.payload?.payment?.entity?.currency }</span> </p> 
            <p><p className="bold"> OrderId: </p>{payment?.payload?.payment?.entity?.order_id}</p>
            <p><p className="bold"> Payment Method: </p>{payment?.payload?.payment?.entity?.method}</p>
            <p><p className="bold"> Card Network: </p>{payment?.payload?.payment?.entity?.card?.network}</p>
            <p><p className="bold"> Cart Type: </p>{payment?.payload?.payment?.entity?.card?.type}</p>
            <p><p className="bold"> Customer Email: </p>{payment?.payload?.payment?.entity?.email}</p>
            <p><p className="bold"> Customer Email: </p>{payment?.payload?.payment?.entity?.contact}</p>

             
           </div>
       </div>
       ))}
   </div>
  )
}

export default Payment