import React, { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  withStyles,
} from "@material-ui/core";
import Customer from "./components/Customer";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.uint * 3,
    overflowX: "auto",
  },
  table: {
    minwidth: 1080,
  },
});

const App = ({ classes }) => {
  const { customers, setCustomers } = useState("");
  useEffect(() => {
    callApi()
      .then(res => {
        setCustomers(res);
      })
      .catch(err => console.log(err));
  }, [setCustomers]);

  const callApi = async () => {
    const response = await fetch("/api/customers"); // 접속하고자 하는 api의 주소
    const body = await response.json(); // json형식으로 출력
    return body;
  };

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers
            ? customers.map(customer => {
                return (
                  <Customer
                    key={customer.id}
                    id={customer.id}
                    image={customer.image}
                    name={customer.name}
                    birthday={customer.birthday}
                    gender={customer.gender}
                    job={customer.job}
                  />
                );
              })
            : "불러오는중"}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default withStyles(styles)(App);
