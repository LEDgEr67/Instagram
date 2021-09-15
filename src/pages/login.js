import { useHistory, Link } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import { useState, useEffect, useContext } from "react";
import * as ROUTES from "../constants/routes";
import Footer from "../components/footer";
import Tooltip from "@material-ui/core/Tooltip";
// import ReactTooltip from "react-tooltip";

export default function Login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      // setEmailAddress("");
      setPassword("");
      setError(error.message);
    }
  };

  useEffect(() => {
    document.title = "Login - Instagram ";
  }, []);

  return (
    <>
      <div
        className="container flex relative mx-auto max-w-screen-md justify-center items-center h-screen"
        style={{ minHeight: "100vh" }}
      >
        <div className="flex w-full sm:w-3/5 absolute text-center justify-center invisible sm:visible sm:relative">
          <img
            src="/images/iphone-with-profile.jpg"
            alt="IPhone with profile"
            //   className="max-w-full"
          />
        </div>
        <div className="flex justify-center items-center flex-col w-3/4  sm:w-2/5">
          <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
            <h1 className="flex justify-center w-full">
              <img
                src="/images/logo.png"
                alt="Instagram"
                className="mt-2 w-6/12 mb-4"
              />
            </h1>
            {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

            <form onSubmit={handleLogin} method="POST">
              <input
                aria-label="Phone number, username or email"
                type="text"
                placeholder="Email Address"
                value={emailAddress}
                className="text-sm text-gray-base w-full py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                onChange={({ target }) => setEmailAddress(target.value)}
              />
              <input
                aria-label="Enter your password"
                type="password"
                placeholder="Password"
                value={password}
                className="text-sm text-gray-base w-full py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                onChange={({ target }) => setPassword(target.value)}
              />
              <button
                disabled={isInvalid}
                type="submit"
                className={`bg-blue-medium text-white w-full rounded h-8 font-bold
            ${isInvalid && "opacity-50 cursor-not-allowed"}`}
              >
                Log In
              </button>
            </form>
          </div>
          <div className="flex justify-center items-center flex-col w-full bg-white p-4 mt-4 border border-gray-primary rounded">
            <p className="text-sm text-center">
              Email Address: <span>thoufic@gmail.com</span> Password: test123{" "}
              <br />
              <br />
              <div className="border-b border-gray-primary" />
              <br />
              Don't have an account ? {""}{" "}
              <Tooltip
                arrow
                interactive
                title="Sign Up is Blocked Temporarily due to some technical issue, Feel free to use the above credential to Login! Thank you for understanding!"
              >
                <span className="font-bold text-blue-medium  cursor-not-allowed">
                  SignUp
                </span>
              </Tooltip>
              {/* <Link to={ROUTES.SIGN_UP} className="font-bold text-blue-medium"> */}
              {/* </Link> */}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 w-screen">
        <Footer />
      </div>
    </>
  );
}
