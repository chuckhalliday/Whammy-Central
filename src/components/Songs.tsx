import React from 'react'
import { supabase } from '@/app/page'

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