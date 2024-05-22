import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

const Cart = () => {
  let ctx = useContext(CartContext)
  console.log(ctx.cartArr)

  const handleIncrement =(ans)=>{
    // console.log(ans)
    ctx.updateIncrement(ans)
  
  }
  const handleDecrement =(ans)=>{
    // console.log(ans)
    ctx.updateDecrement(ans)
  
  }

  const handleDelete=(ans)=>{
    // console.log(ans)
    ctx.removeFromCart(ans)
  }
  return (
    <div className='table-responsive'>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Sno</th>
      <th scope="col">Product</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">quantity</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
   {ctx.cartArr.map((ele,index)=>{
    return  <tr className='align-middle'>
    <th scope="row">{index+1}</th>
    <td><img height={"80px"} width={"80px"} src={ele.thumbnail} alt="" /></td>
    <td>{ele.title}</td>
    <td>{ele.price}</td>
    <td className=''><button onClick={()=>handleIncrement(ele)} className='btn btn-outline-info'>+</button>{ele.quantity} <button className='btn btn-outline-info' onClick={()=>handleDecrement(ele)} >-</button></td>
    <td><button onClick={()=>handleDelete(ele)} className='btn btn-outline-danger'>Remove</button></td>
  </tr>
   })}

  </tbody>
</table>
    </div>
  )
}

export default Cart
