
import {Container,Row, Col,Image, ListGroup, Card} from 'react-bootstrap';
import {Link,useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';



export const Product = (props) => {

    const[productDetails,setproductdetails] =useState({
        
        title:"",
        price:"",
        description:"",
        image:"",
        rating:""


    });


const params=useParams();
console.log(params);
   


    useEffect(()=>{
        console.log("abc")
        if(params.id){
            fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res=>res.json())
            .then(json=>setproductdetails(json))
        }


    },[params.id])

  return (
    <div>

       
     <Container>
        <Link to="/" className='btn btn-light my-3' >  Go Back </Link>
            <Row>
                <Col md={6}>
                    <Image className='prod-image' src={productDetails.image} />
                </Col>
                <Col md={3}>
                <Card className='my-3 p-3 rounded' >
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{productDetails.title}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h5>Price {productDetails.price}</h5>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p>Description {productDetails.description}</p>
                        </ListGroup.Item>

                    </ListGroup>
                    </Card>
                </Col>
                <Col md={3}>
                <Card className='my-3 p-3 rounded' >
                    <ListGroup variant='flush'>
                    <ListGroup.Item>
                            <h3>$ {productDetails.price}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h3>Count: {productDetails.rating.count}</h3>
                        </ListGroup.Item>
                    </ListGroup>
                    </Card>
                        </Col>
            </Row>


</Container>
     
    </div>
  )
}


