import React, { Component } from 'react';
import { Table } from "reactstrap";
import TableRow from "./TableRow";

export default class TableView extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <Table size="sm">
          <thead>
            <tr>
              {Object.keys(this.props.tableData[0]).map(function(key) {
                return <th>{key}</th>;
              })}
            </tr>
          </thead>
          <TableRow key={this.props.tableData.id} data={this.props.tableData} />
        </Table>
      </div>
    );
  }
}