import { useState } from "react";
import InputBox from "./box_components/InputBox";

function CreateBox() {
  //stores the current value inside of the input box
  const [passwordValue, setPasswordValue] = useState("");
  const [usernameValue, setUsernameValue] = useState("");
  const handleCreateClick = async () => {
    //when the create button is clicked
    const myData = {
      username: usernameValue,
      password: passwordValue,
    };

    fetch("http://localhost:4000/adduser", {
      // end point is /adduser
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myData), // converts the data to JSON
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        console.log("Server response:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    alert("Your Account has been successfully created");
    console.log(passwordValue, usernameValue);
  };
  return (
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
        Account Creation
      </h4>
      <div
        style={{ textAlign: "center", paddingLeft: "10px", paddingTop: "5%" }}
      >
        <label
          style={{ paddingRight: "10px" }}
          className="form-label col-auto"
          htmlFor="username"
        >
          Enter a Username
        </label>
        <InputBox
          value={usernameValue}
          onChange={setUsernameValue}
          placeHolder="Username"
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
          Enter a Password
        </label>
        <InputBox
          value={passwordValue}
          onChange={setPasswordValue}
          placeHolder="Password"
        ></InputBox>
      </div>
      <div
        style={{ textAlign: "center", paddingBottom: "4%", paddingTop: "5%" }}
      >
        <button onClick={handleCreateClick} className="btn btn-info">
          Submit
        </button>
      </div>
    </div>
  );
}

export default CreateBox;
