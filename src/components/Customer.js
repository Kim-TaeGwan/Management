import React, { Component } from "react";
import { TableCell, TableRow } from "@material-ui/core";

class Customer extends Component {
  render() {
    const { id, image, name, birthday, gender, job } = this.props;
    return (
      <div>
        <TableRow>
          <TableCell>{id}</TableCell>
          <TableCell>
            <img src={image} alt="userImage" />
          </TableCell>
          <TableCell>{name}</TableCell>

          <TableCell>{birthday}</TableCell>

          <TableCell>{gender}</TableCell>

          <TableCell>{job}</TableCell>
        </TableRow>
      </div>
    );
  }
}

export default Customer;
