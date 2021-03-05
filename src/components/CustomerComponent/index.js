import React from "react";

import CustinerProfile from "./CustinerProfile";
import CustomerInfo from "./CustomerInfo";

const CustomerComponent = ({ image, name, id, birthday, gender, job }) => {
  return (
    <div>
      <CustinerProfile image={image} name={name} id={id} />
      <CustomerInfo birthday={birthday} gender={gender} job={job} />
    </div>
  );
};

export default CustomerComponent;
