export interface SVG {
  onClick?: () => void;
}

export type PayloadType<T> = {
  payload: T;
  type: string;
};

export interface Category {
  _id: string;
  name: string;
  imageUrl: string;
  visible: boolean;
}


export interface Orders {
  category: {
    ready: boolean
    "_id": string,
    "name": string,
    "imageUrl": string,
    "__v": number
  };
  ready: boolean
  images: string[][];
}