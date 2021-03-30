import React, { Component } from "react";
import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  withStyles,
} from "@material-ui/core";
import Customer from "./components/Customer";
import CustomerAddComponent from "./components/CustomerAddComponent";

const styles = theme => ({
  root: {
    width: "100%",
    // marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
  progress: {
    margin: "0 auto",
  },
});

/*

  리액트 라이프사이클(생명주기)
  1) constructor()
  2) componentWillMount()
  3) render()
  4) componentDidMount()

 */
/*
  props or state => shouldComponentUpdate()
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: "",
      completed: 0,
    };
  }

  stateRefresh = () => {
    this.setState({
      customers: "",
      completed: 0,
    })
    this.callApi()
        .then(res => this.setState({ customers: res }))
        // callApi의 데이터가 담긴 body를 res에 담는다
        .catch(err => console.log(err));
  }

  componentDidMount() {
    // 모든 컴포넌트가 마운트 되었을떄 실행
    this.timer = setInterval(this.progress, 20);
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
  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };
  render() {
    const { classes } = this.props;
    // console.log(this.state.customers);
    return (
      <div>
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
              {this.state.customers ? (
                this.state.customers.map(customer => {
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
              ) : (
                <TableRow>
                  <TableCell colSpan="6" align="center">
                    <CircularProgress
                      className={classes.progress}
                      variant="determinate"
                      value={this.state.completed}
                    />
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Paper>
        <CustomerAddComponent stateRefresh={this.stateRefresh} />
      </div>
    );
  }
}

export default withStyles(styles)(App);
