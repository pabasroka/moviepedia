import {Person} from "./person";

export interface PersonList {
  page: number;
  results: Person[];
  total_pages: number;
  total_results: number;
}
