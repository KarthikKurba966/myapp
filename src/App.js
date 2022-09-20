import './App.css';
import {Header} from './Components/Header';
import {Home} from './Components/Home'
import{Footer} from './Components/Footer';
import axios from 'axios';
import {useState,useEffect} from 'react';
import {Routes,Route} from 'react-router-dom';
import {Product} from './Components/Product'


function App() {

   const [products,setProducts] =useState([]);

   const [filterproducts,setFilterproducts]=useState([]);


  

  useEffect(()=>{
    async function fetchData(){
      const res=await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
      setFilterproducts(res.data);

    }
    fetchData();
  }, [])





  return (
    <div>
      <Header />
      <Routes>
     
        <Route exact path="/" element={<Home products={products} setProducts={setProducts} filterproducts={filterproducts} setFilterproducts={setFilterproducts} />} />
        <Route path="/products/:id" element={<Product/>}/>
    
    
      </Routes>
     
      <Footer />
   
    </div>
  );
}

export default App;
