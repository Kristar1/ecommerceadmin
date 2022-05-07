import React from 'react'
import { useState, useEffect } from 'react'
import { userRequest } from '../requestMethod'

const Orders = () => {
    const [orders, setorders] = useState(null)

    useEffect(() => {
        const getOrders= async ()=>{
            try {
                const res= await userRequest.get('/orders');
                console.log(res.data)
                setorders(res.data)
            } catch (error) {
                console.log(error)
        
            }
        }
        getOrders();
       })
  return (
    <div className="userOrders">
<h1>Orders</h1>
<div className="orders">
        {orders?.map((order)=>(
        <div className="orderCard" key={order?._id}>
          <div className="orderProductsWrapper">
          {order?.products.map((product)=>(
          <div className="orderedProducts" key={product?._id}>
            <img className="smaller white" src={product?.img} alt="" />
            <div className="orderedProductsDetails">
            <p><p className="bold"> Product Name: </p>{product?.title}</p>
            <p><p className="bold"> Colour: </p>{product?.color}</p>
            <p><p className="bold"> Size: </p> {product?.size}</p>
            <p><p className="bold"> Quantity: </p> {product?.quantity}</p>
            </div>
          </div>
          ))}
          </div>
          <div className="moreOrderDetails">
          <p><p className="bold"> Order Total: </p>${order?.amount}</p>
          <p><p className="bold"> UserId: </p> {order?.userId}</p>

          <p className="status">{order?.status}</p>
          <p><p className="bold"> Created At: </p> {order?.createdAt}</p>
          </div>
          <div className="userAddress">
              <h3>User Address</h3>
          <p><p className="bold"> Country: </p>{order?.address?.country}</p>
          <p><p className="bold"> State: </p>{order?.address?.state}</p>
          <p><p className="bold"> City: </p>{order?.address?.city}</p>
          <p><p className="bold"> Address: </p>{order?.address?.address}</p>
          <p><p className="bold"> Pincode: </p>{order?.address?.pinCode}</p>

          </div>
        </div>
        ))}
      </div> 
    </div>
  )
}

export default Orders