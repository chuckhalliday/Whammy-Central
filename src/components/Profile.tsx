import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { getCurrentUser, updateUser } from '@/supabase';

const Profile = () => {
  const [artistName, setArtistName] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setArtistName(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await getCurrentUser().then(user => { 
    updateUser(artistName, user)
    })
  }

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