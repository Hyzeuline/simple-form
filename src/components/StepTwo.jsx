const StepTwo = props => {
  return (
    <div className="container">
      <h1>Results</h1>
      <section>
        <div>Name : {props.username}</div>
        <div>Email : {props.email}</div>
        <div>Password : {props.password}</div>
      </section>
      <button
        className="edit"
        onClick={() => {
          props.setValid(false);
        }}
      >
        Edit your informations
      </button>
    </div>
  );
};

export default StepTwo;
