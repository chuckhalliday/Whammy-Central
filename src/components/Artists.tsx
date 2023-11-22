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
    <ul className="data-list">
      {users.map((user) => (
        <li key={user.id} className='data-list-item flex-center'>
          <button>{user.name ? user.name : user.email}</button>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Artists