import React, { useState } from "react";
import { supabase } from "../utils/supabaseClient";
const Auth = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isSignUp, setIsSignUp] = useState(true);

  const handleRegister = async () => {
    try {
      const { user, session, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;

      alert("Check your email to confirm sign up.");
    } catch (e) {
      alert(e.message);
    }
  };
  const handleLogin = async () => {
    try {
      const { user, session, error } = await supabase.auth.signIn({
        email,
        password,
      });

      if (error) throw error;

      alert("User logged in!");
    } catch (e) {
      alert(e.message);
    }
  };

  const changeForm = () => {
    setIsSignUp((value) => !value);
  };

  return (
    <div className="max-w-sm">
      <h1 className="text-center">{isSignUp ? "Register" : "Login"}</h1>
      <div className="m-auto border border-gray-500 rounded p-4 mt-4">
        <div className="field">
          <label htmlFor="" className="text-gray-800 w-full block text-sm">
            Email
          </label>
          <input
            type="text"
            name=""
            className="p-1 border border-gray-500 w-full rounded"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="field mt-3">
          <label htmlFor="" className="text-gray-800 w-full block text-sm">
            Password
          </label>
          <input
            type="password"
            name=""
            id=""
            className="p-1 border border-gray-500 w-full rounded"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        {isSignUp && (
          <button
            className="border p-2 w-full mt-5 rounded bg-black text-white"
            onClick={handleRegister}
          >
            Register
          </button>
        )}
        {!isSignUp && (
          <button
            className="border p-2 w-full mt-5 rounded bg-black text-white"
            onClick={handleLogin}
          >
            Login
          </button>
        )}
        <a
          href="#"
          onClick={changeForm}
          className="text-center block text-blue-700 hover:text-blue-900"
        >
          {isSignUp
            ? "¿Tienes una cuenta? Logueate"
            : "¿Eres nuevo? Registrate"}
        </a>
      </div>
    </div>
  );
};

export default Auth;
