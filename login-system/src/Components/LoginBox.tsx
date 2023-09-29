import { useState } from "react";
import CreateAccountButton from "./box_components/CreateAccountButton";
import LoginButton from "./box_components/LoginButton";
import InputBox from "./box_components/InputBox";

interface Props {
  toggleComponent: () => void;
}

function LoginBox({ toggleComponent }: Props) {
  //stores the current value inside of the input box
  const [passwordValue, setPasswordValue] = useState("");
  const [usernameValue, setUsernameValue] = useState("");
  const handleLoginClick = async () => {
    //when the login button is clicked
    const myData = {
      username: usernameValue,
      password: passwordValue,
    };

    await fetch("http://localhost:4000/checkuser", {
      // end point is /checkuser
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myData), // converts the data to JSON
    })
      .then(async (response) => {
        // retrieves true/false from server telling if creds are valid
        // await needed as otherwise value is "pending"
        const val = await response.text();
        if (val === "true") {
          alert("Logged In");
        } else if (val === "false") {
          alert("Incorrect Credentials");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    // centers the login box
    <div
      style={{
        marginTop: "15%",
        border: "solid black 1px",
        width: "30%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h4
        style={{ textAlign: "center", paddingLeft: "10px", paddingTop: "5%" }}
      >
        Account Login
      </h4>
      {/*HTML for username input box*/}
      <div
        style={{ textAlign: "center", paddingLeft: "10px", paddingTop: "5%" }}
      >
        <label
          style={{ paddingRight: "10px" }}
          className="form-label col-auto"
          htmlFor="username"
        >
          Username:
        </label>
        <InputBox
          placeHolder="Username"
          onChange={setUsernameValue} // when a change is detected changes the current text val
          value={usernameValue} // current value in box
        ></InputBox>
      </div>
      {/*HTML for password input box*/}
      <div
        style={{ textAlign: "center", paddingLeft: "10px", paddingTop: "10px" }}
      >
        <label
          style={{ paddingRight: "10px" }}
          className="form-label col-auto"
          htmlFor="password"
        >
          Password:
        </label>
        <InputBox
          placeHolder="Password"
          onChange={setPasswordValue} // when a change is detected changes the current text val
          value={passwordValue} // current value in box
        ></InputBox>
      </div>
      <div
        style={{
          paddingBottom: "4%",
          paddingTop: "5%",
          textAlign: "center",
        }}
      >
        <LoginButton onClick={handleLoginClick}></LoginButton>
        <CreateAccountButton onClick={toggleComponent}></CreateAccountButton>
      </div>
    </div>
  );
}

export default LoginBox;
