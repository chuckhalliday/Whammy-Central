'use client'

import { useState, useEffect } from "react";
import { Hero, Tabs } from "@/components";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://bpyktwagkbpnqtwlekfa.supabase.co'
export const supabase = createClient(supabaseUrl, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJweWt0d2Fna2JwbnF0d2xla2ZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyMDIxODEsImV4cCI6MjAxNTc3ODE4MX0.J0yA4SnftZnw7zHpKX8QCZIIMFin49R5fPjxJMAGiow')

export default function Home() {
  const [authenticated, setAuthenticated] = useState(false);

  const login = async () => {
    if (!authenticated) {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });
      if (!error) {
        setAuthenticated(true);
      }
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        setAuthenticated(true);
      }
    };

    checkAuthentication();
  }, []);


  const logout = async () => {
    let { error } = await supabase.auth.signOut()
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
