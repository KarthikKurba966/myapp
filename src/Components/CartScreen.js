import React from 'react'
import { Container,Row,Col, ListGroup, ListGroupItem, Image,Button,Form} from 'react-bootstrap'

export const CartScreen = ({selectedProducts,deleteFromCart}) => {
  
    
  return (
    <div>

     
        {selectedProducts.map((item,index)=>{
            return(
             <Container>
        <Row>
                <Col md={8} lg={8} xl={8}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row>
                            <Col md={3}>
                                  <Image className='prood-image' src={item.image}  />
                            </Col>
                                <Col md={3}>
                                <p>{item.title}</p>
                                </Col>
                                <Col md={3}>
                                <p>Price: ${item.price}</p>
                                </Col>
                              
                                <Col md={3}>
                                <Button type="button" onClick={()=>deleteFromCart(index)} variant="light">
                                <i className="fa fa-trash"></i>
                                </Button>
                                </Col>
                                </Row>
                                </ListGroup.Item>
                    </ListGroup>
                </Col>
                                <Col md={4} lg={4} xl={4}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                    <h4>Price: ${item.price}</h4>
                                    </ListGroup.Item>
                                      </ListGroup>
                                </Col>
            </Row>
        </Container> 
            )
           

        })}
        <Container>
            <Row>
                <Col md={8}></Col>
                <Col md={4}>

                    
          <p>Total Price: ${selectedProducts.map(item=>item.price).reduce((prev,curr)=>prev+curr,0)}</p>
         <Button type="button" className="btn btn-block">Proceed to Checkout</Button>
         </Col>
         </Row>
         </Container>




        
    </div>
  )
}


