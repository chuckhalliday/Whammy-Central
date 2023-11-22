import React, { useState, useEffect } from 'react'
import { loadSongs } from '@/supabase'

const Songs = () => {
  const [userSongs, setUserSongs] = useState<{ id: string; title: string }[]>([]);

  useEffect(() => {
    loadSongs().then(songs => {
      setUserSongs(songs);
    });
  }, []);

  return (
    <div>
      <ul className='data-list'>
        {userSongs.map((song) => (
          <li key={song.id} className="data-list-item flex-center">
            <button>{song.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Songs;