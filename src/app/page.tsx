'use client'

import { useState, useEffect } from "react";
import { Hero, Tabs } from "@/components";
import { checkAuthentication, authenticate, signOut } from "@/supabase";

export default function Home() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthentication().then(status => {
      setAuthenticated(status)
    });
  }, []);

  const login = async () => {
    if (!authenticated) {
      authenticate().then(status => {
        setAuthenticated(status)
      })
    }
  };

  const logout = async () => {
    signOut()
    setAuthenticated(false)
  }
  
  return (
    <div>
      {authenticated ? (
      <main className="overflow-hidden">
        <button className="logout button red" onClick={logout}>Log Out</button>
        <Hero />
        <div>
          <Tabs />
        </div>
      </main>
      ) : (
        <button className="login button lightgreen" onClick={login}>Log In with Google</button>
      )}
    </div>
  )
}
