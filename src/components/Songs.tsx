import React, { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bpyktwagkbpnqtwlekfa.supabase.co'
const supabase = createClient(supabaseUrl, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJweWt0d2Fna2JwbnF0d2xla2ZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyMDIxODEsImV4cCI6MjAxNTc3ODE4MX0.J0yA4SnftZnw7zHpKX8QCZIIMFin49R5fPjxJMAGiow')

const Songs = () => {
  const [userSongs, setUserSongs] = useState<any[]>([]);

  const loadSongs = async () => {
    let { data: songs, error } = await supabase
    .from('songs')
    .select()
    if (songs) {
      setUserSongs(songs)
    }
  }

  useEffect(() => {
    loadSongs();
  }, []);

  return (
    <div>
      <ul>
        {userSongs.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Songs