const Form = props => {
  return (
    <form
      className="container"
      onSubmit={event => {
        event.preventDefault();
        if (props.password !== props.password2) {
          alert("Vos deux mots de passe ne sont pas identiques");
        } else {
          props.setValid(true);
        }
      }}
    >
      <h1>Create account</h1>
      <div className="container2">
        <label htmlFor="username">Name</label>
        <input
          type="text"
          id="username"
          placeholder="Jean Dupont"
          value={props.username}
          onChange={event => {
            props.setUsername(event.target.value);
          }}
        />
      </div>
      <div className="container2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="jeandupont@lereacteur.io"
          value={props.email}
          onChange={event => {
            props.setEmail(event.target.value);
          }}
        />
      </div>
      <div className="container2">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="your password"
          value={props.password}
          onChange={event => {
            props.setPassword(event.target.value);
          }}
        />
      </div>
      <div className="container2">
        <label htmlFor="password2">Confirm your password</label>
        <input
          type="password"
          id="password2"
          placeholder="your password"
          value={props.password2}
          onChange={event => {
            props.setPassword2(event.target.value);
          }}
        />
      </div>

      <button className="register">Register</button>
    </form>
  );
};

export default Form;
