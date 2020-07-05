import { Note } from './note';

export interface Tabs {
  name: string;
  author: string;
  
  speed: number;
  notes: Note[];
}