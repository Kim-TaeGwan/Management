import React, { Component } from "react";

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
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
});

class App extends Component {
  state = {
    customers: "",
  };
  componentDidMount() {
    // 모든 컴포넌트가 마운트 되었을떄 실행
    this.callApi()
      .then(res => this.setState({ customers: res }))
      // callApi의 데이터가 담긴 body를 res에 담는다
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch("/api/customers"); // 접속하고자 하는 api의 주소
    const body = await response.json(); // json형식으로 출력
    return body;
  };
  render() {
    const { classes } = this.props;
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
            {this.state.customers
              ? this.state.customers.map(customer => {
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
  }
}

export default withStyles(styles)(App);
