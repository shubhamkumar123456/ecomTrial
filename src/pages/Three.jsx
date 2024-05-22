import React, { useEffect } from 'react'

const Three = (props) => {
    console.log(props)
    let arr = ["one","two","three","four"]

    useEffect(()=>{
        props.data(arr)
    },[])

  return (
    <div>
     
    </div>
  )
}

export default Three
