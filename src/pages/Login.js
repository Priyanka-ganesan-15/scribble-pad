import { UserContext } from "../context/userContext.js";
import { useContext, useEffect, useState } from "react";
import github from "../assets/icons/github.svg";
import imageSrc from "../assets/images/Login-image.jpg"; // Add the path to your image
import "./Login.css";

export default function Login() {
  const { logInUser } = useContext(UserContext);
  const [setShowText] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    // Simulate typing effect
    const timer = setTimeout(() => {
      setShowText(true);
    }, 500); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, [setShowText]);

  const currentYear = new Date().getFullYear();

  return (
    <div className="Login">
      <div className="card">
        <div className="card-content">
          <div className="Image">
            <img src={imageSrc} alt="Description" />
          </div>
          <div className="text-content">
            <h1 className="Welcome-Text">
              Hello,
            </h1>
            <p> Welcome to Scrible pad</p>
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="input"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="input"
                  />
                </div>
                <hr className="divider" />
            <button onClick={logInUser} className="sign-in">
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
      <footer>
        <p>
          Copyright © {currentYear}{" "}
          <a
            href="https://github.com/Priyanka-ganesan-15"
            target="_blank"
            title="Github"
            rel="noreferrer"
          >
            Priyanka Ganesan <img src={github} alt="GitHub" />
          </a>
        </p>
      </footer>
    </div>
  );
}
