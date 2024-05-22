import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Three from './Three';
import CartContext from '../context/CartContext';
import SearchContext from '../context/SearchContext';
import categoryArr from '../components/category';

const Home = (props) => {


  const [currentPage, setcurrentPage] = useState(1);
  let itemPerPage = 9;
  let lastIndex = currentPage * itemPerPage
  let firstIndex = lastIndex - itemPerPage;


  // console.log(categoryArr)
  let ctx = useContext(CartContext)
  // console.log(ctx)

  let ctx1 = useContext(SearchContext)
 
//  console.log(ctx1.search)


  const [allProducts, setallProducts] = useState([]);
  const [products, setproducts] = useState([]);

  

  let noOfButton = Math.ceil(products.length / itemPerPage)

  let buttonArr = [...Array(noOfButton+1).keys()].slice(1)
  console.log(buttonArr)

  let filteredProducts = allProducts.filter((ele)=>ele.title.toLowerCase().includes(ctx1.search))
  let slicedArr = filteredProducts.slice(firstIndex,lastIndex)
  console.log(slicedArr)
  // console.log(filteredProducts)

 let fetchApi = async()=>{
    let res = await fetch('https://dummyjson.com/products?skip=0&limit=100');
    let data =await res.json();
    setallProducts(data.products);
    setproducts(data.products);
 }

useEffect(()=>{
  fetchApi()
},[])

const handleAddTocart=(ans)=>{
  console.log(ans)
  ans.quantity=1
  let itemExists = ctx.cartArr.find((ele)=>ele.id===ans.id)
  // console.log(itemExists)

  if(!itemExists){
    ctx.setcartArr([...ctx.cartArr,ans])

  }


}

const handleCategorySearch = (ans)=>{

  if(ans ==='All'){

    setallProducts(products)
  }
  else{
    let filteredArr = products.filter((ele)=>ele.category===ans)
    // console.log(filteredArr);
    setallProducts(filteredArr);
  }
  // console.log(ans)


}

const handleIncrement =()=>{

  if(currentPage < buttonArr.length){
    setcurrentPage(currentPage+1)
  }
 
}
const handleDecrement =()=>{

  if(currentPage > 1){
    setcurrentPage(currentPage-1)
  }
 
}
  return (
   <div className='row  m-0'>
     <div className="col-2  sidebar">
      <div className="">
      <h4 className='text-center mt-3'>Category</h4>
   <ul className="list-group ms-2  d-flex">
    {categoryArr.map((ele,index)=>{
      return   <li key={index} onClick={()=>handleCategorySearch(ele)} className="list-group-item liList">{ele}</li>
    })}

</ul>
      </div>

     </div>
     <div className="col-sm-10 ">
     <div className='row d-flex justify-content-center gap-2 mt-3'>
      {slicedArr.map((ele)=>{
        return <div key={ele.id} className="card" style={{width: '17rem'}}>
  <img style={{height:"200px"}} src={ele.thumbnail} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-truncate">{ele.title}</h5>

  <div className='text-center mb-1'>
  <Link to="/single" state={ele} className="btn btn-primary text-center">View Details</Link>
  </div>
   <div className='text-center'>
   <button onClick={()=>handleAddTocart(ele)} className='btn btn-success ms-2'>Add to cart</button>
   </div>
  </div>
</div>



      })}
    </div>
 <nav aria-label="Page navigation example " className='d-flex justify-content-center '>
  <ul className="pagination flex-wrap m-auto">
    <li onClick={handleDecrement} className="page-item"><a className="page-link" href="#">Previous</a></li>
      {buttonArr.map((ele)=>{
        return <li onClick={()=>setcurrentPage(ele)} class={ele===currentPage?'page-item active':'page-item'}><Link class="page-link" to="#">{ele}</Link></li>
      })}
  
    <li onClick={handleIncrement} className="page-item"><a className="page-link" href="#">Next</a></li>
  </ul>
</nav>





     </div>
   
   </div>
  )
}

export default Home
