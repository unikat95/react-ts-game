import React, { useState, ChangeEvent, useContext } from "react";

import { auth, db } from "../config/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import { CgSpinner } from "react-icons/cg";
import { GameContext } from "../context/GameContext";
import { Navigate } from "react-router-dom";

export default function Signin() {
  const { char } = useContext(GameContext) || {};
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleMethodChange = () => {
    setIsSignedIn(!isSignedIn);
  };

  const handleSignIn = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const handleSignUp = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const userId = userCredential.user.uid;
        const userData = {
          id: userId,
          email: email,
          nickName: nickName,
          level: 1,
          xp: 0,
          xpToLvlUp: 21,
        };

        await setDoc(doc(db, "users", userId), userData);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const handleNickNameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNickName(e.target.value);
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  if (char) return <Navigate to="/"></Navigate>;

  return (
    <>
      <div className="w-full h-screen bg-signin-bg bg-center bg-cover absolute top-0 left-0 flex justify-center items-center">
        <div className="w-[80%] bg-primary border-[10px] border-tertiary rounded-md pt-10 py-5 flex flex-col justify-center items-center gap-5 relative">
          <div className="w-auto h-auto bg-tertiary text-link px-5 py-2 absolute -top-8 flex justify-center items-center text-xl rounded-md">
            {isSignedIn ? <h1>Sign In</h1> : <h1>Sign Up</h1>}
          </div>
          <form className="w-full h-full flex flex-col justify-center items-center gap-2">
            {!isSignedIn && (
              <input
                type="text"
                name="nickname"
                id="nickname"
                autoComplete="off"
                className="bg-secondary p-2 rounded-md outline-none text-link placeholder:text-link placeholder:text-opacity-40"
                placeholder="Nickname"
                value={nickName}
                onChange={handleNickNameChange}
              />
            )}
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              className="bg-secondary p-2 rounded-md outline-none text-link placeholder:text-link placeholder:text-opacity-40 "
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              className="bg-secondary p-2 rounded-md outline-none text-link placeholder:text-link placeholder:text-opacity-40"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            {isSignedIn ? (
              <button
                className="bg-lime-600 text-white px-4 py-2 rounded-md mt-3 flex justify-center items-center gap-3"
                onClick={handleSignIn}
              >
                Sign in
                {loading && <CgSpinner className="animate-spin" />}
              </button>
            ) : (
              <button
                className="bg-lime-600 text-white px-4 py-2 rounded-md mt-3 flex justify-center items-center gap-3"
                onClick={handleSignUp}
              >
                Sign up
                {loading && <CgSpinner className="animate-spin" />}
              </button>
            )}
          </form>
          {isSignedIn ? (
            <div className="text-link text-xs font-medium flex justify-center items-center gap-1">
              Don`t have an account?
              <button
                className="underline text-lime-400"
                onClick={handleMethodChange}
              >
                Sign up
              </button>
            </div>
          ) : (
            <div className="text-link text-xs font-medium flex justify-center items-center gap-1">
              Already have an account?
              <button
                className="underline text-lime-400"
                onClick={handleMethodChange}
              >
                Sign in
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
