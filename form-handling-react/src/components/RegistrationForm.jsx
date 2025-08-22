import { useState } from "react";

function RegistrationForm() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nameValue || !emailValue || !passwordValue) {
      setMessage("Please fill all the fields");
    }

    setMessage("Form submitted successfully");

    // Clear set message after 1 min
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div>
      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">
            Username
            <br />
            <input
              type="text"
              placeholder="John Doe"
              value={nameValue}
              onChange={(event) => setNameValue(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="">
            Email
            <br />
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              value={emailValue}
              onChange={(event) => setEmailValue(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="">
            Password
            <br />
            <input
              type="password"
              value={passwordValue}
              onChange={(event) => setPasswordValue(event.target.value)}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
