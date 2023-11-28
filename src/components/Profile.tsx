import React, { useState, ChangeEvent, FormEvent } from 'react'
import { getCurrentUser, updateUser, createSong, uploadFile, createTrack } from '@/supabase';

const Profile = () => {
  const [artistName, setArtistName] = useState<string>('');
  const [title, setTitle] = useState<string>('')
  const [destination, setDestination] = useState<string>('')
  const [songFile, setSongFile] = useState<File>()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>, inputType: 'artist' | 'title' | 'destination') => {
    const value = event.target.value;

    if (inputType === 'artist') {
      setArtistName(value);
    } else if (inputType === 'title') {
      setTitle(value);
    } else if (inputType === 'destination') {
      const file = event.target.files?.[0]
      setDestination(value);
      setSongFile(file)
    }
  };

  const handleNameSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await getCurrentUser().then(user => { 
    updateUser(artistName, user)
    })
  }

  const handleSongSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (songFile) {
      await uploadFile(songFile).then(path => {
        getCurrentUser().then(user => { 
          createSong(user, title).then(song => {
            createTrack(song, path, user)
          })
        })
      })
    }
  }

  return (
    <div>
      <form onSubmit={handleNameSubmit}>
        <label> Band/artist name: </label>
          <input
            className='text-box'
            type="text"
            value={artistName}
            onChange={(e) => handleInputChange(e, 'artist')}
          />       
        <button className='button lightgreen' type="submit">Submit</button>
      </form>
      <form onSubmit={handleSongSubmit}>
      <h2>Create new song: </h2>
        <label> Song title: </label>
          <input
            className='text-box'
            type="text"
            value={title}
            onChange={(e) => handleInputChange(e, 'title')}
          />
          <br/>
          <input
            type="file"
            accept="audio/*"
            value={destination}
            onChange={(e) => handleInputChange(e, 'destination')}
          />
        <button className='button lightgreen' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Profile;