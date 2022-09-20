import './App.css';
import {Header} from './Components/Header';
import {Home} from './Components/Home'
import{Footer} from './Components/Footer';
import axios from 'axios';
import {useState,useEffect} from 'react';
import {Routes,Route} from 'react-router-dom';
import {Product} from './Components/Product'
import About from './Components/About';

function App() {

   const [products,setProducts] =useState([]);
   const [product,setProduct] =useState({});

  useEffect(()=>{
    async function fetchData(){
      const res=await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);

    }
    fetchData();
  }, [])

const getDetails =async(title)=>{
  const res= await axios.get(`https://fakestoreapi.com/products/${title}`)
  setProduct(res.data)

}



  return (
    <div>
      <Header />
      <Routes>
     
        <Route exact path="/" element={<Home products={products} setProducts={setProducts} />} />
        <Route path="/products/:id" render={
          props=>(
           <Product getDetails={getDetails} product={product} {...props} />
          )
        }
        />
        <Route path="/about" element={<About />} />
    
      </Routes>
     
      <Footer />
   
    </div>
  );
}

export default App;
