import { useContext, useState } from "react";
import "./SignUp.css";
import { AuthContext } from "../../Hook/AuthProvider";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Swal from "sweetalert2";

const SignUp = () => {
  const { googleSignIn, signIn, signUp } = useContext(AuthContext);

  const [photoURL, setImage] = useState("");
  const [displayName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Google
  const handleGoogle = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      swal("Good job!", "Log In successfully!", "success");
      navigate("/");
    });
  };

  // Manual
  const handleLogIn = (e) => {
    e.preventDefault();
    if (email && password) {
      signIn(email, password)
        .then((result) => {
          // const loggedInUser = result.user;
          const users = { email };
          setEmail("");
          setPassword("");

          swal("Good job!", "Log In successfully!", "success");
          navigate("/");

          // axios.post("http://localhost:7000/jwt", users).then((res) => {
          //   console.log(res.data);
          // });
        })
        .catch((err) => {
          setError(err.massage);
          swal("Error!", "Log In failed! Provide valid information", "error");
        });
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      )
    ) {
      return setError(
        "Your password should be minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character"
      );
    } else {
      setError("");

      signUp(email, password, displayName, photoURL);
      console
        .log(email, password, displayName, photoURL)
        .then((result) => {
          console.log(result.user);
          setEmail("");
          setPassword("");
          setName("");
          setImage("");
          Swal("Good job!", "Register successfully!", "success");
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div>
      <div className="text-center text-2xl text-red-600 p-2"><p>{error}</p></div>
      <div>
        <div className="flex justify-center items-center h-screen mt-10 2xl:mt-0">
          <div className="rounded-lg bg-gradient-to-b from-orange-600 via-orange-400 to-orange-600">
            <div className="mains">
              <input type="checkbox" id="chk" aria-hidden="true" />
              <div className="signup">
                <form onSubmit={handleRegister}>
                  <label htmlFor="chk" aria-hidden="true">
                    Sign up
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={displayName}
                    name="text"
                    placeholder="User name"
                    required
                  />
                  <input
                    type="text"
                    onChange={(e) => setImage(e.target.value)}
                    value={photoURL}
                    name="photoURL"
                    placeholder="Image Url"
                  />
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Password"
                    required=""
                  />
                  <button>Sign up</button>
                </form>
              </div>

              <div className="login">
                <form onSubmit={handleLogIn}>
                  <label htmlFor="chk" aria-hidden="true">
                    Login
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Email"
                    required
                  />
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Password"
                    required
                  />
                  <button>Login</button>
                </form>
                <button
                  onClick={handleGoogle}
                  className="ml-[70px] btn bg-white text-black font-extrabold hover:bg-purple-400"
                >
                  <img
                    className="h-10 w-10"
                    src="https://i.ibb.co/Y7DnLZZ/Logo-Search-Google-on-transparent-background-PNG.png"
                  />
                  google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
