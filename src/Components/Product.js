
import {Container,Row, Col,Image, ListGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';


export const Product = (props) => {

    console.log(props)

  return (
    <div>
     <Container>
        <Link to="/" className='btn btn-light my-3' >  Go Back </Link>
            <Row>
                <Col md={6}>
                    <Image src={props.product.name} />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{props.product.title}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h5>Price {props.product.price}</h5>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p>Description {props.product.description}</p>
                        </ListGroup.Item>

                    </ListGroup>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                    <ListGroup.Item>
                            <h3>{props.product.price}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h3>{props.product.rating.count}</h3>
                        </ListGroup.Item>
                    </ListGroup>
                        </Col>
            </Row>


</Container>
     
    </div>
  )
}


