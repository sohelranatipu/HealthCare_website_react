import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Medicine = (props) => {
    const {id,name,img,price,generic,manufacturer} = props.medicine;
    return (
        <div>
            <Col>
                <Card style={{minHeight:'540px',marginBottom:'20px'}}>
                        <Card.Img style={{height:'256px'}} variant="top" src={img} />
                        <hr/>
                        <Card.Body style={{textAlign:'left'}}>
                        <Card.Title>{name}</Card.Title>
                        <h3>Price:{price}</h3>
                        <Card.Text>
                             {generic}
                        </Card.Text>
                        <h5>By:{manufacturer}</h5>
                        <Link to={`/singleMedicine/${id}`}>
                            <Button variant="info">See Details</Button>
                        </Link>
                        </Card.Body>
                    </Card>
                 </Col>
        </div>
    );
};

export default Medicine;