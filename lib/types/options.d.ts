export interface SearchOptions {
    mirror: URL;
    query: string;
    count?: number | string;
    offset?: number | string;
    fields?: string | string[];
    sort_by?: string;
    search_in?: string;
    reverse?: boolean;
  }
  export interface RandomOptions {
    mirror: string;
    count?: number;
    fields?: string | string[];
  }
  export interface SpeedOptions {
    mirror: string;
  }