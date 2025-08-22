import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    let newErrors = {};

    if (!username.trim()) {
      newErrors.username = "Please fill in the username";
    }
    if (!password.trim()) {
      newErrors.password = "Please fill in the password";
    }
    if (!email.trim()) {
      newErrors.email = "Please fill in the email";
    }

    setErrors(newErrors);

    if (username && email && password) {
      setMessage("Form submitted successfully");
    }

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
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <br />
          {errors.username && <span>{errors.username}</span>}
        </div>
        <div>
          <label htmlFor="">
            Email
            <br />
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <br />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="">
            Password
            <br />
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <br />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
