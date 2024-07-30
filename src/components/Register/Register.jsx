import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase .config";
import { Link } from "react-router-dom";
//import { auth } from "../firebase/firebase.config.js";

//import Register from './Register';

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="text-center">
      <div className="max-auto md:w-1/2">
        <h2 className="text-3xl">Please Register</h2>
        <form onSubmit={handleRegister}>
          <input
            className="mb-4 mt-2 w-3/4 px-2 py-4"
            placeholder="Email Address"
            type="email"
            name="email"
            id=""
          />
          <br />
          <input
            className="w-3/4 px-2 py-4"
            placeholder="Password"
            type="password"
            name="password"
            id=""
          />
          <br />
          <input
            className="w-3/4 btn btn-secondary px-2 py-4 mt-9"
            type="submit"
            value="Register"
          />
        </form>
        {
            <p> Already have account? please  <Link  to={'/login'}>Login</Link></p>
          }
      </div>
    </div>
  );
};

export default Register;
