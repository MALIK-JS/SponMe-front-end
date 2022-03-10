import Signin from "../Components/Signin";
import Signup from "../Components/Signup";
import { useState, useContext } from "react";


function Registration() {
  const [panel, setPanel] = useState("");

  return (
    <section className="main-section">
      <h2>SPON ME</h2>
      <span>TRY DIFFIRENT CUISINE</span>
      <div className={panel + " container"}>
        <Signup />
        <Signin />

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="button ghost" onClick={() => setPanel("")}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="button ghost"
                onClick={() => setPanel("right-panel-active")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registration;
