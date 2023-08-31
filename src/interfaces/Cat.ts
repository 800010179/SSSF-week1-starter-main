import {RowDataPacket} from 'mysql2';
import {User} from './User';

interface Cat {
  // TODO: create a cat interface
  // owner should be a User or a number
  cat_id: number;
  cat_name: string;
  weight: number;
  filename: string;
  birthdate: Date;
  lat: number;
  lng: number;
  owner: User | number;
}

interface GetCat extends RowDataPacket, Cat {}

// TODO: create PostCat interface or type. Same as cat but without id
type PostCat = Omit<Cat, 'cat_id'>;

// TODO: create PutCat interface or type. Sameas PostCat but properties are optional
type PutCat = Partial<PostCat>;

export {Cat, GetCat, PutCat, PostCat};
