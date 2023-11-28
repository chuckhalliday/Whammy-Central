import React, { useEffect, useState } from 'react'
import { selectTracksBySong } from '@/supabase';

interface WorkSpaceProps {
    songId: number;
    songTitle: string;
  }

const WorkSpace = ({ songId, songTitle } : WorkSpaceProps) => {
  const [tracks, setTracks] = useState<any[]>([])

  useEffect(() => {
    selectTracksBySong(songId).then(tracks => {
        if (tracks) {
        setTracks(tracks.map((track) => track.file_path));
        }
    });
  }, []);

  return (
    <div className='workspace-container'>
        <h1 className='workspace-title flex-center'>{songTitle}</h1>
        {tracks.map((media) => {
            return (<>
            <div>
                <audio controls><source src={`https://bpyktwagkbpnqtwlekfa.supabase.co/storage/v1/object/public/song_files/${media}`}/></audio>
            </div>
            </>)
        })}
    </div>
  )
}

export default WorkSpace