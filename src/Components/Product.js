
import {Container,Row, Col,Image, ListGroup, Card,Button} from 'react-bootstrap';
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

   
    useEffect(()=>{
       
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
                        <Row>
                            <Col>Price:</Col>
                            <Col><h3>${productDetails.price}</h3></Col>
                        </Row>
                          
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col> Status: </Col>
                                <Col> {productDetails.rating.count > 0 ? "In Stock" : "Out of Stock"} </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col> Count: </Col>
                                <Col> {productDetails.rating.count} </Col>
                            </Row>

                            </ListGroup.Item>
                        <ListGroup.Item>
                          
                         
                            <Button type="button" onClick={()=>props.addToCart(productDetails)} className="btn btn-block my-3" >Add to Cart</Button>
                            </ListGroup.Item>
                    </ListGroup>
                    </Card>
                        </Col>
            </Row>


</Container>
     
    </div>
  )
}


