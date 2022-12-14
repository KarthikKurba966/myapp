import './App.css';
import {Header} from './Components/Header';
import {Home} from './Components/Home'
import{Footer} from './Components/Footer';
import axios from 'axios';
import {useState,useEffect} from 'react';
import {Routes,Route} from 'react-router-dom';
import {Product} from './Components/Product'
import {CartScreen} from './Components/CartScreen'





function App() {

  

   const [products,setProducts] =useState([]);

   const [filterproducts,setFilterproducts]=useState([]);

   const [selectedProducts,setselectedProducts]=useState([]);


  

  useEffect(()=>{
    async function fetchData(){
      const res=await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
      setFilterproducts(res.data);

    }
    fetchData();
  }, [])


 function addToCart(product){
  setselectedProducts(prevState=>[...prevState,product])
 }
 function deleteFromCart(index){
  const duplicateSelectedProducts=[...selectedProducts]
  duplicateSelectedProducts.splice(index,1)
  setselectedProducts(duplicateSelectedProducts)


 }


  return (
    <div>
      <Header />
      <Routes>
     
        <Route exact path="/" element={<Home products={products} addToCart={addToCart} setProducts={setProducts} filterproducts={filterproducts} setFilterproducts={setFilterproducts} />} />
        <Route path="/products/:id" element={<Product addToCart={addToCart}/>}/>
        <Route path="/products/cart" element={<CartScreen selectedProducts={selectedProducts} deleteFromCart={deleteFromCart} />}/>
      </Routes>
      <Footer />
   
    </div>
  );
}

export default App;
