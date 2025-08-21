import { useState } from "react";
import "./App.css";
import StepTwo from "./components/StepTwo";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  return (
    <>
      <header>Create account</header>
      <form
        onSubmit={event => {
          event.preventDefault();
          if (password !== password2) {
            alert("Vos deux mots de passe ne sont pas identiques");
          } else {
            return (
              <Navigate to="/simple-form-app/src/components/StepTwo.jsx" />
            );
          }
        }}
      >
        <div>
          <label htmlFor="username">Name</label>
          <input
            type="text"
            id="username"
            placeholder="Jean Dupont"
            value={username}
            onChange={event => {
              setUsername(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="jeandupont@lereacteur.io"
            value={email}
            onChange={event => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="your password"
            value={password}
            onChange={event => {
              setPassword(event.target.value);
            }}
          />
          <label htmlFor="password2">Confirm your password</label>
          <input
            type="password"
            id="password2"
            placeholder="your password"
            value={password2}
            onChange={event => {
              setPassword2(event.target.value);
            }}
          />
        </div>
        <button>Register</button>
        <footer>
          Made with <span>React</span> at <span>Le Reacteur</span> by{" "}
          <span>Hyzeuline</span>
        </footer>
      </form>
    </>
  );
}

export default App;
