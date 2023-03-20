import React from "react";
import "./Product.css";

 function Product(props){   
  
  
return(
    <>
     <div className='row mt-3'>
        <div className='col-4'>
          <h2>{props.product.name} <span class="badge bg-secondary">{props.product.price}</span> </h2>
        </div>
        <div className='col-4'>
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button  onClick={()=>{props.decreamentQuantity(props.index)}} type="button" class="btn btn-danger"  >-</button>
  <button  type="button" class="btn btn-warning">{props.product.quantity}</button>
  <button onClick={()=>{props.increamentQuantity(props.index)}} type="button" class="btn btn-success">+</button>
  
</div>
        </div>
            
  <div className='col-2'>
{props.product.quantity*props.product.price}
</div>
<div className="col-2 btn btn-danger position-left" onClick={()=>{props.removeItem(props.index)}} >remove</div>
     </div>

</>
)
}
export default Product;