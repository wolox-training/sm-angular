import { GeneralObject } from "./general-object.interface";

export interface IAllBooksHTTPResponse {
  count: number;
  current_page: number;
  next_page: number | null;
  page: BookResponse[];
  total_count: number;
  total_pages: number;
}

export interface BookResponse extends GeneralObject {
  author: string;
  created_at: string;
  editor: string;
  genre: string;
  id: number;
  image_url: string;
  title: string;
  updated_at: string;
  year: string;
}
