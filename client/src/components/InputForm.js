import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import uuid from 'uuid';

export default class InputForm extends Component {
  render() {
    // state = []

    let frequencyOpt = ['Variable', 'Daily', 'Weekly', 'Bi-Weekly', 'Monthly'];
    let catagorySource = ['Income', 'Expense'];

      let frequencyOptions = frequencyOpt.map(freq => {
        return (
          <option key={freq} value="frequency">
            {freq}
          </option>
        );
      });
      
      let catagoryOfSource = catagorySource.map(catagory => {
        return (
          <option key={catagory} value="frequency">
            {catagory}
          </option>
        );
      });

    return (
  
        <Form>
            <FormGroup>
                <Label for="itemName">Item Name</Label>
                <Input type="text" name="itemName" id="itemName" placeholder="Your Income or Your Bill Name" />
            </FormGroup>
            <FormGroup>
                <Label for="amount">Amount</Label>
                <Input type="number" name="amount" id="amount" placeholder="25" />
            </FormGroup>
            <FormGroup>
                <Label for="frequency">Frequency</Label>
                <Input
                    type="select"
                    name="frequency"
                    id="frequency"
                    onChange={this.handleInputChange}
                >
                    {frequencyOptions}
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="category">Type Of Item</Label>
                <Input            
                    type="select"
                    name="category"
                    id="category"
                    onChange={this.handleInputChange}
                >
                    {catagoryOfSource}
                </Input>
            </FormGroup>
            <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                >Add Item</Button>
        </Form>
    );
  }
}