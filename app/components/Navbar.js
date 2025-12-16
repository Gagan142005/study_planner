"use client";

import Link from "next/link";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div className="navbar">
      <Link href="/">Home</Link>
      {user ? (
        <>
          <Link href="/planner">Planner</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link href="/login">Login</Link>
          <Link href="/signup">Signup</Link>
        </>
      )}
    </div>
  );
}
