import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import validator from "validator";
import { useHistory } from "react-router-dom";
let web3;
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function MainSignIn() {
  const history = useHistory();
  const classes = useStyles();

  const [walletAccount, setWalletAccount] = useState("");
  const [email, setEmail] = useState("");
  const [checkEmail, setCheckEmail] = useState(false);
  const [username, setUsername] = useState("");
  const [signupDiv, setSignupDiv] = useState(false);
  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    setEmail(e.target.value);
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("");
      setCheckEmail(true);
    } else {
      setCheckEmail(false);
      setEmailError("Enter valid Email!");
    }
  };
  window.ethereum.on("accountsChanged", async function (accounts) {
    // document.location.reload();
    const acc = await web3.eth.getAccounts();
    localStorage.setItem("walletAddress", acc);
    setWalletAccount(acc);
    localStorage.setItem("walletAddress", await web3.eth.getAccounts());
  });
  async function ConnectWallet() {
    web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
    localStorage.setItem("walletAddress", await web3.eth.getAccounts());
    setWalletAccount(await web3.eth.getAccounts());
  }
  function handleSignUp() {
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("walletAddress", walletAccount);

    history.push({
      pathname: "/",
      // state: { walletAccount },
    });
  }
  function myFunction() {
    setSignupDiv(true);
    var x = document.getElementById("oops");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function validateForm() {
    return email.length > 0 && username.length > 0 && checkEmail;
  }
  return (
    <>
      <div>
        <div className="max-w-6xl  text-center mb-32 mt-32 mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          {!walletAccount ? (
            <div>
              <div className=" gridsm:grid-cols-12">
                <span className=" text-5xl font-medium" data-aos="zoom-y-out">
                  Welcome!
                </span>
              </div>
              <div className="max-w-xs mx-auto ">
                <span
                  className=" lg: text-5xl mb-8 leading-normal font-medium "
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Let's begin with your wallet.
                </span>
                <div
                  className="max-w-xs mt-4 mx-auto sm:max-w-none sm:flex sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay="300"
                >
                  <button
                    className="btn btn-primary text-center"
                    onClick={ConnectWallet}
                    style={{
                      fontSize: "12px",
                      padding: 22,
                      width: 300,
                      backgroundColor: "black",
                      borderColor: "black",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    SELECT A WALLET
                  </button>
                </div>
                <div className="max-w-xs mt-4 mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <a
                    className="text-sm"
                    href="#"
                    style={{
                      textDecoration: "none",
                      borderBottom: "solid 0.5px",
                      color: "black",
                    }}
                  >
                    First time setting up a wallet?
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="oops" id="oops">
              <div className="max-w-xs mx-auto ">
                <div className="pb-8">
                  <span
                    className=" lg: text-2xl mb-8 leading-normal font-medium "
                    data-aos="zoom-y-out"
                    data-aos-delay="150"
                  >
                    Oops! It looks like there's no account linked to that
                    address.
                  </span>
                </div>
                <div class="box-content  text-left bg-gray-200 h-42 w-42 p-2 py-3">
                  <p className="text-xxs font-semibold mt-2 ml-2">ADDRESS</p>
                  <p className="text-xxs font-semibold mt-2 ml-2">
                    {walletAccount}
                  </p>
                  <div
                    className="max-w-xs mt-4 mx-auto sm:max-w-none sm:flex sm:justify-center"
                    data-aos="zoom-y-out"
                    data-aos-delay="300"
                  >
                    <button
                      className="btn btn-primary text-center"
                      onClick={ConnectWallet}
                      style={{
                        fontSize: "12px",
                        padding: 20,
                        width: 300,
                        backgroundColor: "black",
                        borderColor: "black",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      SWITCH ADDRESS
                    </button>
                  </div>{" "}
                </div>

                <div className="max-w-xs mt-4 mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <a
                    href="#"
                    className="text-xs"
                    style={{
                      textDecoration: "none",
                      borderBottom: "solid 0.5px",
                      color: "black",
                    }}
                    onClick={myFunction}
                  >
                    Would you like to sign up instead?
                  </a>
                </div>
              </div>
            </div>
          )}
          {/*SignUp DIV */}
          {signupDiv ? (
            <div>
              <div className="max-w-xs mx-auto ">
                <span
                  className=" lg: text-5xl font-Lobster mb-8 leading-normal  "
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Create a CarVi Account
                </span>
                <div class="box-content rounded-lg text-left bg-gray-200 h-42 w-42 p-2 ">
                  <p className="text-xxs font-semibold mt-2 ml-2">ADDRESS</p>
                  <p className="text-xxs font-semibold mt-2 ml-2">
                    {walletAccount}
                  </p>
                </div>
                <div className="mt-4">
                  <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                      id="standard-basic"
                      label="Username *"
                      onChange={(e) => setUsername(e.target.value)}
                      style={{ width: 300 }}
                    />
                  </form>
                </div>
                <div className="mt-4">
                  <form className={classes.root}>
                    <TextField
                      type="email"
                      id="standard-basic"
                      onChange={(e) => validateEmail(e)}
                      label="Email *"
                      style={{ width: 300 }}
                    />
                  </form>
                  <span className="text-xs font-bold text-red-500">
                    {emailError}
                  </span>
                </div>
                <div
                  className="max-w-xs mt-5 mx-auto sm:max-w-none sm:flex sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay="300"
                >
                  <button
                    className="btn btn-primary text-center"
                    onClick={handleSignUp}
                    style={{
                      fontSize: "12px",
                      padding: 20,
                      width: 300,
                      backgroundColor: "black",
                      borderColor: "black",
                      fontWeight: "bold",
                    }}
                    disabled={!validateForm()}
                  >
                    {" "}
                    SIGN UP
                  </button>
                </div>{" "}
                <div className="max-w-xs mt-4 mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <span className="text-xs">
                    By clicking sign up you indicate that you have read and
                    agree to our{" "}
                    <a
                      href="#"
                      style={{
                        textDecoration: "underline",
                        color: "black",
                      }}
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      style={{
                        textDecoration: "underline",

                        color: "black",
                      }}
                    >
                      Privacy Policy
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
export default MainSignIn;
