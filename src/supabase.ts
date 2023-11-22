import { createClient } from '@supabase/supabase-js'

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