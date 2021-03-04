import React, { Component } from "react";

class Customer extends Component {
  render() {
    const { image, name, id, birthday, gender, job } = this.props;
    return (
      <div>
        <CustinerProfile image={image} name={name} id={id} />
        <CustomerInfo birthday={birthday} gender={gender} job={job} />
      </div>
    );
  }
}

class CustinerProfile extends React.Component {
  render() {
    const { image, name, id } = this.props;

    return (
      <div>
        <img src={image} alt="userImage" />
        <h2>
          {name}({id})
        </h2>
      </div>
    );
  }
}

class CustomerInfo extends React.Component {
  render() {
    const { birthday, gender, job } = this.props;
    return (
      <div>
        <p>{birthday}</p>
        <p>{gender}</p>
        <p>{job}</p>
      </div>
    );
  }
}

export default Customer;
