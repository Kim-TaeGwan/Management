import React from "react";
import { TableCell, TableRow } from "@material-ui/core";

const CustomerComponent = ({ id, image, name, birthday, gender, job }) => {
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
};

export default CustomerComponent;
