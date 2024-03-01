import { useState } from "react";
import { Link } from "react-router-dom";

import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../utils/firebase";
import { useUser } from "../Context/Context";
import { useNavigate } from "react-router-dom";

// onclick function

const Login = () => {
  const { userData, setUserData, updateUser, fetchDisplayName } = useUser();

  const { userEmail, userPassword } = userData;

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
    if (userDocRef) {
      updateUser(user.displayName, user.email, user.uid);
      const UID = localStorage.setItem("UID", user.uid);
      const Email = localStorage.setItem("Email", user.email);
      console.log(user.displayName, user.email, user.uid);
      fetchDisplayName(user.uid);
      navigate("/");
    }
  };

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (userEmail && userPassword) {
      try {
        const { user } = await signInAuthUserWithEmailAndPassword(
          userEmail,
          userPassword
        );
        if (user) {
          updateUser(user.displayName, user.email, user.uid);
          const UID = localStorage.setItem("UID", user.uid);
          const Email = localStorage.setItem("Email", user.email);
          console.log(user.displayName, user.email, user.uid);
          fetchDisplayName(user.uid);
          navigate("/");
        }
      } catch (err) {
        console.log("Error Occurred while Login", err.message);
        if (err.code === "auth/invalid-credential") {
          alert("Invalid Credentials");
        }
      }
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <main className="h-[33rem] w-[32rem] bg-white flex item-center justify-evenly rounded-md m-[auto]">
      <form
        className="flex item-center justify-center flex-col gap-7 mt-[-1rem] mr-8"
        onSubmit={submitHandler}
      >
        <span className="text-3xl font-bold">Welcome Back</span>
        <div>
          Create account with existing
          <span className="text-lg font-bold text-gray-800"> Email</span>
        </div>
        <input
          type="email"
          placeholder="Email"
          className="border-b-2 outline-none border-black p-2 bg-transparent mr-[-2rem] text-black"
          id="userEmail"
          name="userEmail"
          onChange={changeHandler}
        />
        <input
          type="password"
          placeholder="Password"
          className="border-b-2 outline-none border-black p-2 bg-transparent mr-[-2rem] text-black"
          id="userPassword"
          name="userPassword"
          onChange={changeHandler}
        />
        <button
          type="submit"
          className="bg-fuchsia-700 rounded-md h-10 w-[18rem] text-white mr-[-2rem]"
        >
          Sign in
        </button>
        <button
          className="bg-blue-700 rounded-md h-10 w-[18rem] text-white mr-[-2rem]"
          onClick={signInWithGoogle}
        >
          Sign in with Google
        </button>
        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </form>
    </main>
  );
};

export default Login;
