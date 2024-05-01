// index.d.ts

// Available mirrors information (replace with actual structure if different)
interface MirrorInfo {
  baseUrl: string;
  canDownloadDirect: boolean; // Optional property if not all mirrors support direct download
}
type JSONValue =
    | string
    | number
    | boolean
    | JSONObject
    | JSONArray
    | null;
interface JSONObject {
  [x: string]: JSONValue;
}

interface JSONArray extends Array<JSONValue> { }
declare namespace available_mirrors {
  export const mirrors: MirrorInfo[];
}

// Clean module
declare module 'clean.js' {
  export function forFields(
    json: any,
    fields: string | string[] | {[key: string]: any},
  ): any[];
  export function dups(array: any[]): any[];
}

// Latest module
declare module 'latest.js' {
  export function id(mirror: string): Promise<string | Error>;
  export function text(mirror: string): Promise<any | Error>;
}

// Random module
declare module 'random.js' {
  export interface RandomOptions {
    mirror: string;
    count?: number;
    fields?: string | string[];
  }
  export function text(options: RandomOptions): Promise<any[] | Error>;
}

// Search module
declare module 'search.js' {
  export interface SearchOptions {
    mirror: string;
    query: string;
    count?: number;
    offset?: number | string;
    sort_by?: string;
    search_in?: string;
    reverse?: boolean;
  }
  export function search(options: SearchOptions): Promise<any[] | Error>;
}

// Speed module
declare module 'speed.js' {
  export function mirror(): Promise<string | Error>;
  export function canDownload(
    text: string | {md5?: string},
  ): Promise<string | Error>;
}
