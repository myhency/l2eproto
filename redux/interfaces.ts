export interface IHeadphone {
  id: string;
  image: string;
  level: number;
  energy: string;
  type: string;
}

export interface IHeadphoneReducer {
  headphone?: IHeadphone | null;
  headphones?: Array<IHeadphone> | null;
  rejected: boolean;
  pending: boolean;
  rejectedMessage?: string;
}

export interface IPlaylist {
  id: string;
  image: string;
  name: string;
  creator: string;
  numOfSongs: number;
}

export interface IPlaylistReducer {
  playlist?: IPlaylist | null;
  playlists?: Array<IPlaylist> | null;
  rejected: boolean;
  pending: boolean;
  rejectedMessage?: string;
}

export interface ISong {
  id: string;
  playlistId: string;
  artistProfilePicture: string;
  name: string;
  artist: string;
  playDuration: string;
}

export interface ISongReducer {
  songs?: Array<ISong>;
  rejected: boolean;
  pending: boolean;
  rejectedMessage?: string;
}
