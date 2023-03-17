import React from "react";
import { Alert, Container, ListGroupItem, Row } from "react-bootstrap";
import Product from "./Product";
import listProducts from "../products.json"

export default class Products extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showAlert:false,
            showAlert2:true

        }
        this.HandleClick=this.HandleClick.bind(this)
    }

    buyProduct=(a)=>a===0?true:false
    HandleClick(){
        this.setState((OldShowAlert)=>({showAlert:OldShowAlert.showAlert=true}))
        setTimeout(()=>{this.setState((OldShowAlert)=>({showAlert:OldShowAlert.showAlert=false}))},2000) 
    }
    componentDidMount(){
        setTimeout(()=>{this.setState((OldShowAlert2)=>({showAlert2:OldShowAlert2.showAlert2=false}))},3000)
    }

    render(){
        return(
            <>
            {this.state.showAlert2 && (
                    <Alert variant="success">
                    <Alert.Heading>Hey, nice to see you</Alert.Heading>
                    <p>
                    Hey, Welcome To Our Shop MyStore
                    </p>
                    <hr />
                    <p className="mb-0">
                    Thank you for choosing our store, we hope you enjoy your shopping experience!
                    </p>
                  </Alert>
                )}
             <Container>
                <Row>
                    { listProducts.map((product,i)=>{
                        return <Product key={i} p={product} Buy={this.buyProduct(product.quantity)} h={this.HandleClick}/>})  }
                
                </Row>
                <div>
                {this.state.showAlert && (
                    <div className="alert alert-info">You bought an item</div>
                )}
                </div>
            </Container>
            </>
           
        )
    }
}