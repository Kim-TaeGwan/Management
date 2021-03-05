const CustomerInfo = ({ birthday, gender, job }) => {
  // 생년월일, 성별, 직업
  return (
    <div>
      <p>{birthday}</p>
      <p>{gender}</p>
      <p>{job}</p>
    </div>
  );
};

export default CustomerInfo;
