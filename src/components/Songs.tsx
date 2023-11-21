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
      <ul>
        {userSongs.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Songs;