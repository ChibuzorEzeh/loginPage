import { useState, useEffect } from "react";

function LoginPage() {
  const [database, setDataBase] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleAddProfile(e) {
    e.preventDefault();
    if (email.trim() !== "" && password.trim() !== "") {
      setDataBase((d) => [...d, { email, password }]);
      const proper = email.slice(0, email.indexOf("@"));
      setMessage(`Hello, ${proper}`);
      setTimeout(() => setMessage(""), 2000);
      console.log(email, password);
      setEmail("");
      setPassword("");
    } ;

  }
  useEffect(() => {
    console.log(database);
  }, [database]);

  return (
    <>
      {message && <h1 className="message">{message}</h1>}
      <div className="parent">
        <div className="leftSide">
          <h1>Welcome</h1>
          <span>Join Our Unique platform, Explore a New Experience</span>
          <button>Register</button>
        </div>

        <form action="" className="formCon" onSubmit={handleAddProfile}>
          <h1>Sign In</h1>
          <div className="test">
            <div className="master">
              <input
                placeholder=" "
                type="email"
                id="mail"
                value={email}
                onChange={handleEmailChange}
              />
              <label htmlFor="mail">Email</label>
            </div>
            <div className="master">
              <input
                placeholder=" "
                type="password"
                className="password"
                id="pass"
                value={password}
                onChange={handlePasswordChange}
              />
              <label htmlFor="pass">Password</label>
            </div>
            <div className="cont">
              <div>
                <input type="checkbox" id="check" />
                <label htmlFor="check">Remember me</label>
              </div>
              <a href="#" id="forgot">
                Forgot Password?
              </a>
            </div>
          </div>
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </>
  );
}
export default LoginPage;
