import { Thumbnail } from './thumbnail.model';
import { Url } from './url.model';

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  urls: Url[];
}
