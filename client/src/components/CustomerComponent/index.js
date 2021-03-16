import React from "react";
import { TableCell, TableRow } from "@material-ui/core";

const CustomerComponent = ({ id, image, name, birthday, gender, job }) => {
  // const { id, image, name, birthday, gender, job } = props;
  return (
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
  );
};

export default CustomerComponent;
