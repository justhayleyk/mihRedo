import React, { Component } from 'react';
import {   Container, Button, ListGroup, ListGroupItem, Table } from 'reactstrap';
import { CSSTransition, TransitionGroup }  from 'react-transition-group';
import uuid from 'uuid';

class BudgetView extends Component {
  state = {
    items: [
        {
        id: uuid(),  
        itemName: "Paycheque",
        amount: 2500,
        frequency:  "bi-weekly",
        nextPayment:  "1/12/19",
        category:  "income"
        },
        {
        id: uuid(),  
        itemName: "Uber",
        amount: 200,
        frequency:  "variable",
        category:  "income"
        },
        {
        id: uuid(),  
        itemName: "Bell Canada",
        amount: 250,
        frequency:  "monthly",
        nextPayment:  "2/3/19",
        category:  "expense"
        },
        {
        id: uuid(),  
        itemName: "Dentist",
        amount: 200,
        frequency:  "variable",
        category:  "expense"
        }
    ] 
  }




  render() {
    const { items } = this.state
    console.log(this.state)

    return (
        <Container>
            <Button
                color="dark"
                style={{marginBottom: '2rem'}}
                onClick={() => {
                    const name = prompt('Enter Item');
                    if(name) {
                        this.setState(state => ({
                            items: [...state.items, {id: uuid(), items}]
                        }))
                    }
                }}
            >Add Item</Button>
            <ListGroup>
                <TransitionGroup className="budgetList">
                    {items.map(({id, itemName, amount}) => (
                        <ListGroupItem>
                            <Button className="remove-btn"
                            color="danger"
                            size="sm"
                            onClick={()=> {
                                this.setState( state => ({
                                    items: state.items.filter( item => item.id !==id)
                                }));
                            }}>&times; </Button>
                            {itemName}
                        </ListGroupItem>
                    ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
    );
  }
}

export default BudgetView;