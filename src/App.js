import React,{useState} from "react";
import AddItem from "./components/AddItem.js"
import NewItem from "./components/NewItems.js";


import Navbar from "./components/Navbar.js";
import ProductList from "./components/ProductList.js";
import Footer from "./components/Footer.js";
function App(props)
{
    const products=[
        {
            name:"realme",
            price:2000,
            quantity:0
        },
        {
            name:"samsung",
            price:5000,
            quantity:0
        },
        {
            name:"apple",
            price:6000,
            quantity:0
        }

    ];
  
    let [productList,setProductList]=useState(products);
    let [totalAmount,setTotalAmount]=useState(0);
    const increamentQuantity=(index)=>{
        let newProductList = [...productList]
        let newTotalAmount=totalAmount;
        newProductList[index].quantity++
        newTotalAmount =newTotalAmount  + newProductList[index].price
        setTotalAmount(newTotalAmount);
        setProductList(newProductList);
    }
     
    

    const decreamentQuantity=(index)=>{
        let newProductList = [...productList]
        let newTotalAmount=totalAmount;
        if(newProductList[index].quantity>0)
        {
            newProductList[index].quantity--
            newTotalAmount=newTotalAmount-newProductList[index].price             
        }
        setTotalAmount(newTotalAmount);
        setProductList(newProductList);
    }
    const resetQuantity=()=>{
        let newProductList=[...productList];
        newProductList.map((products)=>{
            products.quantity=0
        })
        setProductList(newProductList);
        setTotalAmount(0); 
    }
    const removeItem=(index)=>{
        let newProductList = [...productList];
        let newTotalAmount=totalAmount;
        newTotalAmount = newTotalAmount-newProductList[index].quantity * newProductList[index].price;
        newProductList.splice(index,1);
        setProductList(newProductList);
        setTotalAmount(newTotalAmount);
    }
      
     const addItem=(name,price)=>{
        let newProductList = [...productList];
        newProductList.push({
            name:name,
            price:price,
            quantity:0
        });
        setProductList(newProductList);

    } 

    return(
        <>
        <Navbar></Navbar>
        
        <main className='container mt-5'>
             <AddItem addItem={addItem}/>
        <ProductList productlist={productList} increamentQuantity={increamentQuantity} decreamentQuantity={decreamentQuantity} removeItem={removeItem}/>
        </main>
        <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
        </>
    );
}
export default App;