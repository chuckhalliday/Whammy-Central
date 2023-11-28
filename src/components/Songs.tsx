import React, { useState, useEffect } from 'react';
import { loadSongs } from '@/supabase';
import { WorkSpace } from './index';

const Songs = () => {
  const [userSongs, setUserSongs] = useState<{ id: number; title: string }[]>([]);
  const [selectedSongId, setSelectedSongId] = useState<number>(0);
  const [selectedSongTitle, setSelectedSongTitle] = useState<string>('');

  useEffect(() => {
    loadSongs().then(songs => {
      setUserSongs(songs);
    });
  }, []);

  const handleSongClick = (songId: number, songTitle: string) => {
    setSelectedSongId(songId);
    setSelectedSongTitle(songTitle)
  };

  return (
    <div>
      {selectedSongId ? (
        <div>
        <button onClick={() => setSelectedSongId(0)}>Return to Songs</button>
        <WorkSpace songId={selectedSongId} songTitle={selectedSongTitle}/>
        </div>
      ) : (
        <ul className='data-list'>
          {userSongs.map((song) => (
            <li key={song.id} className="data-list-item flex-center">
              <button onClick={() => handleSongClick(song.id, song.title)}>{song.title}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Songs;