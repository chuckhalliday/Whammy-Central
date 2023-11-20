import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bpyktwagkbpnqtwlekfa.supabase.co'
const supabase = createClient(supabaseUrl, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJweWt0d2Fna2JwbnF0d2xla2ZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyMDIxODEsImV4cCI6MjAxNTc3ODE4MX0.J0yA4SnftZnw7zHpKX8QCZIIMFin49R5fPjxJMAGiow')


const Profile = () => {
  const [artistName, setArtistName] = useState<string>('');
  const [user, setUser] = useState<string>('')

  const getCurrentUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (user){
    setUser(user.id)
    }
  }

  useEffect(() => {
    getCurrentUser();
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setArtistName(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await getCurrentUser()
    const { data, error } = await supabase
    .from('users')
    .update({ name: artistName })
    .eq('id', user)
    .select()
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your preferred name:
          <input
            className='text-box'
            type="text"
            value={artistName}
            onChange={handleInputChange}
          />
        </label>
        <button className='button lightgreen' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Profile;