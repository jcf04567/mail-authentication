import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../service/firebaseConfig";
import { Navigate, useNavigate } from "react-router-dom";

const Main = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const navigate = useNavigate();

  const _signOut = async () => {
    await signOut(auth);
    navigate("/SignIn/");
  };
  return (
    <>
      {!user ? (
        <Navigate to={`/SignIn/`} />
      ) : (
        <>
          <h1>Main page</h1>
          <h2>{user?.email}</h2>
          <button onClick={_signOut}>SignOut</button>
        </>
      )}
    </>
  );
};

export default Main;
