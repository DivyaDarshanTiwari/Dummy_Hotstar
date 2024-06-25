export interface SearchInterface {
    count: number;
    next: string | null;
    previous: string | null;
    results: Pokemon[];
}

interface Pokemon {
    name: string;
    url: string;
  }