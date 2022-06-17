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
