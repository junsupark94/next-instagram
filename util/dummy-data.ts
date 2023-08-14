type Reply = {
  account: string;
  id: string;
  text: string;
  likes: number;
  replying?: string;
};

type Media = {
  src: string;
  type: "image" | "video";
};

export type Post = {
  account: string;
  id: string;
  date: Date;
  likes: number;
  replies: Reply[];
  description: string;
  content: Media[];
};

let id = 1;
let day = 1;

export const DUMMY_DATA: Post[] = [
  {
    account: "junsupark",
    id: String(id++),
    date: new Date(2023, 8, day++),
    likes: 10,
    replies: [],
    description: "First post!",
    content: [{ src: "/test.jpg", type: "image" }],
  },
];
