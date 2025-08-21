import { useState } from "react";
import "./App.css";
import StepTwo from "./components/StepTwo";
import Form from "./components/Form";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [valid, setValid] = useState(false);

  return (
    <>
      {valid === true ? (
        <StepTwo
          username={username}
          email={email}
          password={password}
          setValid={setValid}
        />
      ) : (
        <Form
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          password2={password2}
          setPassword2={setPassword2}
          valid={valid}
          setValid={setValid}
        />
      )}
      <footer className="container">
        <p>
          Made with <span>React</span> at <span>Le Reacteur</span> by{" "}
          <span>Hyzeuline</span>
        </p>
      </footer>
    </>
  );
}

export default App;
