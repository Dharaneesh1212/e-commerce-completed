import { useState } from "react";

//functions
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../utils/firebase/index";
import { useUser } from "../Context/Context";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { userData, setUserData } = useUser();
  const { userName, userEmail, userPassword, userConfirmPassword } = userData;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const navigate = useNavigate();

  const clearForm = () => {
    setUserData({
      userName: "",
      userEmail: "",
      userPassword: "",
      userConfirmPassword: "",
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (userPassword !== userConfirmPassword) {
      alert("Password does not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        userEmail,
        userPassword
      );
      console.log(user);

      const userDocRef = await createUserDocumentFromAuth(user, {
        displayName: userName,
        email: userEmail,
      });
      if (userDocRef) {
        alert("SignUp Success");
        navigate("/log-in");
        clearForm();
      }
    } catch (err) {
      console.log("Error occurred during creating user", err.message);
      console.log(err.code);
    }
  };

  return (
    <main className="h-[33rem] w-[48rem] bg-white flex item-center justify-evenly rounded-md m-[auto]">
      <div>
        <img
          className="h-[30rem] w-96 mt-6"
          src="https://images.unsplash.com/photo-1566070143658-523a24797109?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&w=1000&q=80"
          alt=""
        />
      </div>
      <form
        onSubmit={submitHandler}
        className="flex item-center justify-center flex-col gap-6 mt-[-1rem] mr-8"
      >
        <span className="text-3xl font-bold">Welcome</span>
        <span className="text-2xl font-bold text-gray-700">Create Account</span>
        <input
          onChange={changeHandler}
          type="text"
          placeholder="name"
          className="border-b-2 outline-none border-black p-2 bg-transparent mr-[-2rem] text-black required:"
          id="userName"
          name="userName"
          value={userName}
        />
        <input
          onChange={changeHandler}
          type="email"
          placeholder="email"
          className="border-b-2 outline-none border-black p-2 bg-transparent mr-[-2rem] text-black required:"
          id="userEmail"
          name="userEmail"
          value={userEmail}
        />
        <input
          onChange={changeHandler}
          type="password"
          placeholder="password"
          className="border-b-2 outline-none border-black p-2 bg-transparent mr-[-2rem] text-black required:"
          id="userPassword"
          name="userPassword"
          value={userPassword}
        />
        <input
          onChange={changeHandler}
          type="password"
          placeholder="Confirm Password"
          className="border-b-2 outline-none border-black p-2 bg-transparent mr-[-2rem] text-black required:"
          id="userConfirmPassword"
          name="userConfirmPassword"
          value={userConfirmPassword}
        />
        <button
          type="submit"
          className="bg-fuchsia-700 rounded-md h-10 w-[18rem] text-white mr-[-2rem]"
        >
          Sign up
        </button>
      </form>
    </main>
  );
};

export default Signup;
