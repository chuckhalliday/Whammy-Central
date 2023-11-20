import React from 'react'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bpyktwagkbpnqtwlekfa.supabase.co'
const supabase = createClient(supabaseUrl, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJweWt0d2Fna2JwbnF0d2xla2ZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyMDIxODEsImV4cCI6MjAxNTc3ODE4MX0.J0yA4SnftZnw7zHpKX8QCZIIMFin49R5fPjxJMAGiow')

const loadSongs = async() => {
  let { data: Songs, error } = await supabase
  .from('Songs')
  .select('*')
  return Songs
}

const Songs = () => {

  const songs = loadSongs()
  console.log(songs)

  return (
    <div>Songs</div>
  )
}

export default Songs