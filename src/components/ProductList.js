import React from "react";
import Product from "./Product.js";

function productList(props){
return(
    
    
props.productlist.map((product,i)=>{
    return <Product product={product} key={i} increamentQuantity = {props.increamentQuantity} index={i} decreamentQuantity={props.decreamentQuantity} removeItem={props.removeItem}  />
    
})  





)
}
export default productList;