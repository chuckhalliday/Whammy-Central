import { createClient } from '@supabase/supabase-js'
import { v4 as uuidv4 } from 'uuid';

const supabaseUrl = 'https://bpyktwagkbpnqtwlekfa.supabase.co'
const supabase = createClient(supabaseUrl, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJweWt0d2Fna2JwbnF0d2xla2ZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyMDIxODEsImV4cCI6MjAxNTc3ODE4MX0.J0yA4SnftZnw7zHpKX8QCZIIMFin49R5fPjxJMAGiow')

export const checkAuthentication = async () => {
    const { data: { session } } = await supabase.auth.getSession()
    if (session) {
      return true;
    } else {
      return false
    }
};

export const authenticate = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
    });
    if (!error) {
      return true;
    } else {
      return false
    }
}

export const signOut = async () => {
    let { error } = await supabase.auth.signOut()
}

export const getCurrentUser = async () => {
    const { data: { user }, error } = await supabase.auth.getUser()
    if (user) {
      return user.id
    } else {
      return ''
    }
}

export const updateUser = async (artistName: string, user: string) => {
    const { data, error } = await supabase
    .from('users')
    .update({ name: artistName })
    .eq('id', user)
    .select()
}

export const loadUsers = async () => {
    let { data: users, error } = await supabase
    .from('users')
    .select()
    if (users) {
      return users
    } else {
      return []
    }
}

export const loadSongs = async () => {
    let { data: songs, error } = await supabase
    .from('songs')
    .select()
    if (songs) {
      return songs
    } else {
      return []
    }
}

export const createSong = async (user: string, title: string) => {
  const { data, error } = await supabase
  .from('songs')
  .insert([
    { user: user, title: title },
  ])
  .select()
  if (data){
    return data[0].id
  } else {
    return ''
  }
}

export const uploadFile = async (file: File) => {
  let userId: string = await getCurrentUser()
  let fileName = uuidv4()
  let path = userId + "/" + fileName

  const { data, error } = await supabase
  .storage
  .from('song_files')
  .upload(path, file)

  return path
}

export const createTrack = async (song: string, destination: string, user: string) => {
  const { data, error } = await supabase
  .from('tracks')
  .insert([
    { song_id: song, file_path: destination, user_id: user },
  ])
  .select()
}