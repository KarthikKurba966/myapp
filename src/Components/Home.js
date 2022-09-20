

import {Container, Row, Col, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom';

export const Home = (props) => {
    const {setProducts,products}=props;

    const filterItem=(categItem) =>{
        const updatedItems =products.filter((currElem)=>{
            return currElem.category === categItem;
        });
        setProducts(updatedItems);
    }


   
  return (
    <Container>
        <button className='btn btn-primary' onClick={()=>filterItem(`men's clothing`)}>Fashion</button>
        <button className='btn btn-success' onClick={()=>filterItem(`women's clothing`)}>Women Clothing</button>
        <button className='btn btn-danger' onClick={()=>filterItem('electronics')}>Electronics</button>
        <button className='btn btn-warning' onClick={()=>filterItem('jewelery')}>Jewelery</button>
        <button className='btn btn-secondary' onClick={()=>setProducts(products)}>All Products</button>
        <button  className="btn btn-dark" onClick={()=>setProducts([])}>Clear Filter</button>
   
       
      
        <Row>
        {products.map((product)=>(
            <Col sm={12} md={6} lg={4} xl={3} >
                 <Link to ={`/products/${product.id}`}>
                <Card className='my-3 p-3 rounded' >
                    <Card.Img src={product.image} variant="top" style={{width:"250px",height:"200px"}} />
                </Card>
                </Link>
                <Card.Body>
                    <Card.Title as="div">
                        <strong>{product.title}</strong>
                    </Card.Title>
                    <Card.Text as="div">
                        <p>Rating: {product.rating.rate}</p>
                    </Card.Text>
                    <Card.Text as="h3" className="pr-3"> ${product.price}</Card.Text>
                </Card.Body>
            </Col>
           
        ))}
    </Row>
   
    </Container>
  )
}
 

