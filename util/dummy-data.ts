type Reply = {
  account: string;
  id: number;
  text: string;
  likes: number;
  replying?: number;
};

type Media = {
  src: string;
  type: "image" | "video";
};

export type Post = {
  account: string;
  id: number;
  date: Date;
  likes: number;
  replies: Reply[];
  description: string;
  content: Media[];
};

type User = {
  id: string;
  name: string;
  profilePicture: string;
  bio: string;
  postCount: number;
  followerCount: number;
}

let postId = 1;
let replyId = 1;
let day = 1;

export const DUMMY_DATA: Post[] = [
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2023, 4, day++),
    likes: 10,
    replies: [
      {account: "bobsmith", id: replyId++, text: "Welcome to Instagram!", likes: 2},
      {account: "junsupark", id: replyId++, text: "Thanks Bob!", likes: 3, replying: 1},
    ],
    description: "First post!",
    content: [{ src: "/test.jpg", type: "image" }],
  },
  {
    account: "bobsmith",
    id: postId++,
    date: new Date(2023, 7, day++),
    likes: 129,
    replies: [
      {account: "notjunsupark", id: replyId++, text: "Cool picture!", likes: 3},
      {account: "junsupark", id: replyId++, text: "Where did you take this picture? We need to hang out again soon!", likes: 10},
      {account: "rihanna", id: replyId++, text: "Sick", likes: 45679},
      {account: "drake", id: replyId++, text: "CLB", likes: 3},
      {account: "notjunsupark", id: replyId++, text: "Cool picture!", likes: 3},
      {account: "notjunsupark", id: replyId++, text: "Cool picture!", likes: 3},
      {account: "notjunsupark", id: replyId++, text: "Cool picture!", likes: 3},
    ],
    description: "Second post!",
    content: [{ src: "/test2.jpg", type: "image" }],
  },
  {
    account: "notjunsupark",
    id: postId++,
    date: new Date(2023, 7, day++),
    likes: 3456,
    replies: [],
    description: "Third post!  I just came back from Lisbon, Portugal working on a cool project!\nWe were filming the #NewJeans music video for Super Shy! I had such a great time and the girls and the dancers were fantastic! They learned my choreography really well and executed my vision. I hope to do this again soon!\nPlease stream Super Shy Bunnies! #kpop",
    content: [{ src: "/test3.jpg", type: "image" }],
  }
];
