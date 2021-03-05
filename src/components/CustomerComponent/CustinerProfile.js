const CustinerProfile = ({ image, name, id }) => {
  // 이미지, 이름, id
  return (
    <div>
      <img src={image} alt="userImage" />
      <h2>
        {name}({id})
      </h2>
    </div>
  );
};

export default CustinerProfile;
