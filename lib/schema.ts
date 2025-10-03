export type Img = { url: string; width: number; height: number };

export type News = {
  id: string;
  title: string;
  body?: string;
  date: string;
  category?: "行事" | "連絡" | "お知らせ";
  image?: Img;
};

export type FAQ = { id: string; question: string; answer: string; category?: string };

export type Teacher = {
  id: string;
  name: string;
  role: string;
  image?: Img;
  profile?: string;
  qa?: { q: string; a: string }[];
};

export type Voice = { id: string; name?: string; type: "卒園生" | "保護者"; body: string; image?: Img };

export type EventItem = { month: number; titles: string[]; images?: Img[]; description?: string };

export type OneDay = { items: { time: string; title: string; description?: string; image?: Img }[] };

export type Globals = {
  siteName: string;
  tel: string;
  fax?: string;
  address: string;
  mapUrl?: string;
  instagramUrl?: string;
  lineQr?: Img;
  footerCta?: string;
};

export type Curriculum = { tabs: { label: string; content: string; images?: Img[] }[] };

export type ListResponse<T> = { contents: T[]; totalCount: number; offset: number; limit: number };


