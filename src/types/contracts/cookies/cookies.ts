export type ObjCookies = {
  [key: string]: string;
};

export interface Cookies {
  getCookies: (keys: string[]) => ObjCookies;
  setCookies: (obj: ObjCookies) => void;
  deleteCookies: (keys: string[]) => void;
}
