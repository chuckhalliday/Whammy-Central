import React, { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bpyktwagkbpnqtwlekfa.supabase.co'
const supabase = createClient(supabaseUrl, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJweWt0d2Fna2JwbnF0d2xla2ZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyMDIxODEsImV4cCI6MjAxNTc3ODE4MX0.J0yA4SnftZnw7zHpKX8QCZIIMFin49R5fPjxJMAGiow')

const Artists = () => {

  const [users, setUsers] = useState<any[]>([]);

  const loadUsers = async () => {
    let { data: users, error } = await supabase
    .from('users')
    .select()
    if (users) {
      setUsers(users)
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
    <ul>
      {users.map((user) => (
        <li >{user.name ? user.name : user.email}</li>
      ))}
    </ul>
  </div>
  )
}

export default Artists