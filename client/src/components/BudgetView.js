import React, { Component } from 'react';
import {   Container  } from 'reactstrap';
// import { CSSTransition, TransitionGroup }  from 'react-transition-group';
import uuid from 'uuid';
import TableView from './TableView'
import InputForm from './InputForm'

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
        nextPayment:  " ",
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
        nextPayment:  " ",
        category:  "expense"
        }
    ] 
  }



  render() {
    const { items } = this.state

    return (
        <Container>
            <InputForm />
            
        
            <hr />

            <TableView title="Your Budget Information" tableData={items} />
          
                    
            



        </Container>
    );
  }
}

export default BudgetView;


