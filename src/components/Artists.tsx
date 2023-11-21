import React, { useState, useEffect } from 'react'
import { loadUsers } from '@/supabase';

const Artists = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    loadUsers().then(users => {
      setUsers(users);
    });
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