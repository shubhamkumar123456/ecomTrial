import React, { useContext, useState } from 'react'
import CartContext from './CartContext'

const CartState = (props) => {



    const [cartArr, setcartArr] = useState([]);

    console.log(cartArr)

    function addToCart(){

    }

    function removeFromCart(ans){
      console.log(ans)
     let filteredArr = cartArr.filter((ele)=>ele.id!==ans.id)
     console.log(filteredArr)
     setcartArr(filteredArr)
    }

    function updateIncrement(ans){
      console.log(ans)
      let updatedObj = {
        ...ans,
        quantity:ans.quantity+1,
        price:ans.price+ (ans.price/ans.quantity)

      }
      let index = cartArr.findIndex((ele)=>ele.id===ans.id)
      let copyArr = [...cartArr]
      copyArr[index] = updatedObj
      setcartArr(copyArr)
    }

    function updateDecrement(ans){
      console.log(ans)
      let updatedObj = {
        ...ans,
        quantity:ans.quantity>1 ? ans.quantity-1 : ans.quantity,
        price:ans.quantity >1 ? ans.price- (ans.price/ans.quantity): ans.price

      }
      let index = cartArr.findIndex((ele)=>ele.id===ans.id)
      let copyArr = [...cartArr]
      copyArr[index] = updatedObj
      setcartArr(copyArr)
    }



  return (
    <CartContext.Provider value={{cartArr,updateIncrement,updateDecrement,setcartArr,addToCart,removeFromCart}}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartState
