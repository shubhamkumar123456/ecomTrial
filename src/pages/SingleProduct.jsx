import React from 'react'
import { useLocation } from 'react-router-dom'

const SingleProduct = () => {
    let location = useLocation()
    console.log(location.state)
  return (
    <div className='row mt-3'>
        <div className="col-md-6  d-flex justify-content-center align-items-center">
            <img style={{width:"80%",height:"80%"}}  src={location.state.thumbnail} alt="" />
        </div>
        <div className="col-md-6 d-flex  p-4  flex-column gap-1">
            <h3>Title:{location.state.title}</h3>
            <h3>Brand:{location.state.brand}</h3>
            <p>Price: {location.state.price}</p>
            <p>Rating:{location.state.rating}</p>
            <p>Stock:{location.state.stock}</p>
            <p>{location.state.description}</p>
            <button  className='btn btn-success'>Add to cart</button>
        </div>
    </div>
  )
}

export default SingleProduct
