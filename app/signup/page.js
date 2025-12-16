"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password);
    router.push("/planner");
  };

  return (
    <div className="card">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button>Create Account</button>
      </form>
    </div>
  );
}
