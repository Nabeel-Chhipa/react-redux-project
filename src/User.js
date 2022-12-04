const User = (props) => {
  let { data, city, country } = props;
  return (
    <div>
      <h3>Name: {data.name}</h3>
      <h3>Age: {data.age}</h3>
      <h3>city: {city}</h3>
      <h3>Country: {country}</h3>
    </div>
  );
};

export default User;
