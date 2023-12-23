import React, { useState } from "react";

import { signOut } from "firebase/auth";
import { auth } from "../config/Firebase";
import { CgSpinner } from "react-icons/cg";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleSignOut = () => {
    setLoading(true);
    setTimeout(() => {
      signOut(auth);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full h-full bg-tertiary text-link flex flex-col justify-center items-center gap-10">
      <div className="flex justify-center items-center gap-2">
        <button
          className="bg-black text-white px-4 py-2 rounded-md flex justify-center items-center gap-3"
          onClick={handleSignOut}
        >
          Logout
          {loading && <CgSpinner className="animate-spin" />}
        </button>
      </div>
    </div>
  );
}
