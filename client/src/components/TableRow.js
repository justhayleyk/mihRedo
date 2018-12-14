import React, { Component } from 'react';

export default class TableRow extends Component {
  render() {

    return (
      <tbody key={this.props.data.id}>
        {this.props.data.map(rData => (
          <tr>
            {Object.keys(rData).map(function(key) {
              if (key === "id") {
                return <th>{rData[key]}</th>;
              } else {
                return <td>{rData[key]}</td>;
              }
            })}
          </tr>
        ))}
      </tbody>
    );
  }
}