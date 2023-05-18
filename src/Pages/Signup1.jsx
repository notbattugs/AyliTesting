import { useRef, useState } from "react";
import { instance } from "../App";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [role, setRole] = useState();
  const username = useRef();
  const email = useRef();
  const mobileNumber = useRef();
  const pass = useRef();
  const repass = useRef();
  const admin = useRef();
  const owner = useRef();
  const customer = useRef();
  const navigate = useNavigate();

  const signup = async () => {
    if (repass.current.value === pass.current.value) {
      try {
        await instance.post("/customer", {
          username: username.current.value,
          email: email.current.value,
          mobileNumber: mobileNumber.current.value,
          password: pass.current.value,
          role: role,
        });
        alert("successful");
        navigate("/signin");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("pass buruu");
    }
  };
  return (
    <div className="signupbody">
      <div className="signupleft">
        <div className="signupleftcont">
          <h1>Signup</h1>
          <div class="inputbox">
            <input required="required" type="text" ref={username} />
            <span>Username</span>
            <i></i>
          </div>
          <div class="inputbox">
            <input required="required" type="text" ref={email} />
            <span>Email</span>
            <i></i>
          </div>
          <div class="inputbox">
            <input required="required" type="text" ref={mobileNumber} />
            <span>Mobile Number</span>
            <i></i>
          </div>
          <div class="inputbox">
            <input required="required" type="password" ref={pass} />
            <span>Password</span>
            <i></i>
          </div>
          <div class="inputbox">
            <input required="required" type="password" ref={repass} />
            <span>Repeat Password</span>
            <i></i>
          </div>
          <div class="mydict">
            <div>
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="customer"
                  ref={customer}
                  onClick={() => {
                    setRole(customer.current.value);
                  }}
                />
                <span>Customer</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="owner"
                  ref={owner}
                  onClick={() => {
                    setRole(owner.current.value);
                  }}
                />
                <span>Owners</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="admin"
                  ref={admin}
                  onClick={() => {
                    setRole(admin.current.value);
                  }}
                />
                <span>Admin</span>
              </label>
            </div>
          </div>
          <button onClick={signup}>Button</button>
        </div>
      </div>
      <div className="signupright">
        <img
          style={{
            height: "100%",
            width: "100%",
            borderBottom: "5px white solid",
            borderTop: "5px white solid",
            borderRadius: "0% 0px 0px 0%",
          }}
          src="https://images.trvl-media.com/lodging/51000000/50700000/50698500/50698469/11bd0b02.jpg?impolicy=resizecrop&rw=1200&ra=fit
          "
          alt=""
        />
      </div>
    </div>
  );
}

export { Signup };
