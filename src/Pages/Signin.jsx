import { useRef } from "react";
import { instance } from "../App";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Signin() {
  const username = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const signin = async () => {
    try {
      const res = await instance.post("/customer/login", {
        username: username.current.value,
        password: password.current.value,
      });
      localStorage.setItem("user_id", JSON.stringify(res.data.data._id));
      localStorage.setItem("token", JSON.stringify(res.data.token));
      localStorage.setItem("role", JSON.stringify(res.data.data.role));
      if (res.data.data.role === "customer") {
        navigate("/");
      } else {
        navigate(`/${res.data.data.role}`);
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="signupbody">
      <div className="signupleft">
        <div className="signupleftcont2">
          <h1>Signin</h1>
          <div class="inputbox">
            <input required="required" type="text" ref={username} />
            <span>Username</span>
            <i></i>
          </div>
          <div class="inputbox">
            <input required="required" type="password" ref={password} />
            <span>Password</span>
            <i></i>
          </div>
          <button onClick={signin}>Button</button>
        </div>
        <Link to={"/signup"}>
          <div className="alrdyhavesignup">Don't have account?</div>
        </Link>
      </div>
      <div className="signupright">
        <img
          style={{
            height: "100%",
            width: "100%",
            borderBottom: "5px white solid",
            borderTop: "5px white solid",
          }}
          src="https://images.trvl-media.com/lodging/51000000/50700000/50698500/50698469/11bd0b02.jpg?impolicy=resizecrop&rw=1200&ra=fit"
          alt=""
        />
      </div>
    </div>
  );
}

export { Signin };
