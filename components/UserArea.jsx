import React from "react";
import { supabase } from "../utils/supabaseClient";

const UserArea = () => {
  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) throw error;
    } catch (error) {
      alert(e.message);
    }
  };
  return (
    <div>
      <h1>User Area</h1>
      <button
        className="p-4 bg-black text-white rounded rounder-sm"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default UserArea;
