export interface IHeadphone {
  id: string;
  image: string;
  level: number;
  battery: string;
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
  artistProfilePicture?: string | null;
  artistProfileBigPicture?: string | null;
  url: string;
  name: string;
  artist: string;
  playDuration: string;
  videoUrl: string;
}

export interface ISongReducer {
  songs?: Array<ISong> | null;
  rejected: boolean;
  pending: boolean;
  rejectedMessage?: string;
}

export interface IUser {
  id: string;
  totalPlayTime: number;
  totalEarnBLB: number;
  totalEnergy: number;
  currentEnergy: number;
  headphones: Array<IHeadphone>;
}

export interface IUserReducer {
  user?: IUser | null;
  rejected: boolean;
  pending: boolean;
  rejectedMessage?: string;
}
