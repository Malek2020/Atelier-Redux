import React from 'react';
import { Button, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


export default class Product extends React.Component {
  constructor(){
    super()
    this.state={likes:0}
    this.addLikes=this.addLikes.bind(this)
  }
  addLikes(){
    this.setState((oldLike)=>({likes:oldLike.likes+1}))
  }
  

    render()
    {
  return (

    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require("../assets/images/"+this.props.p.img)} />
      <Card.Body>
        <Card.Title>Product Title:{this.props.p.name}</Card.Title>
        <Card.Text>
          Product description:{this.props.p.description}
        </Card.Text>
        <div className='text-center'>product price: {this.props.p.price}</div>
        <div className='text-center'>quantity: {this.props.p.quantity}</div>
        <div className='text-center'>likes: {this.props.p.like=this.state.likes}</div>
        <div>
        <Button onClick={this.addLikes} className='' variant="primary">Like</Button>{''}
        <Button onClick={this.props.h} disabled={this.props.Buy} className='offset-6' variant="info">Buy</Button>{''}
        </div>
      </Card.Body>
    </Card>
    </Col>
    
    
    
  );
}
}