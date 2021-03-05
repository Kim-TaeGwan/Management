import React from "react";

const CustomerComponent = ({ image, name, id, birthday, gender, job }) => {
  return (
    <div>
      <CustinerProfile image={image} name={name} id={id} />
      <CustomerInfo birthday={birthday} gender={gender} job={job} />
    </div>
  );
};

const CustinerProfile = ({ image, name, id }) => {
  return (
    <div>
      <img src={image} alt="userImage" />
      <h2>
        {name}({id})
      </h2>
    </div>
  );
};

const CustomerInfo = ({ birthday, gender, job }) => {
  return (
    <div>
      <p>{birthday}</p>
      <p>{gender}</p>
      <p>{job}</p>
    </div>
  );
};

export default CustomerComponent;
