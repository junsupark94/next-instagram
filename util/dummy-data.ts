export type Reply = {
  account: string;
  id?: number;
  text: string;
  likes: number;
  replying?: number;
  date: Date;
};

export type Media = {
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
      {account: "bobsmith", id: replyId++, text: "Welcome to Instagram!", likes: 2, date: new Date()},
      {account: "junsupark", id: replyId++, text: "Thanks Bob!", likes: 3, replying: 1, date: new Date()},
    ],
    description: "First post!",
    content: [
      { src: "/test1.jpg", type: "image" },
      { src: "/test2.jpg", type: "image" },
      { src: "/test3.jpg", type: "image" },
      { src: "/video1.mp4", type: "video" },
    ],
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2023, 4, day++),
    likes: 10,
    replies: [
      {account: "bobsmith", id: replyId++, text: "Great post", likes: 2, date: new Date()},
      {account: "notjunsupark", id: replyId++, text: "Love it!", likes: 3, replying: 1, date: new Date()},
    ],
    description: "Second post!",
    content: [
      { src: "/test4.jpg", type: "image" },
      { src: "/test5.jpg", type: "image" },
      { src: "/video2.mp4", type: "video" },
      { src: "/test6.jpg", type: "image" },
    ],
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2023, 4, day++),
    likes: 10,
    replies: [    ],
    description: "Third post!",
    content: [
      { src: "/test7.jpg", type: "image" },
    ],
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2023, 4, day++),
    likes: 10,
    replies: [    ],
    description: "Fourth post!",
    content: [
      { src: "/video5.mp4", type: "video" },
    ],
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2023, 4, day++),
    likes: 10,
    replies: [    ],
    description: "Fifth post!",
    content: [
      { src: "/video7.mp4", type: "video" },
    ],
  },
  {
    account: "bobsmith",
    id: postId++,
    date: new Date(2023, 7, day++),
    likes: 129,
    replies: [
      {account: "notjunsupark", id: replyId++, text: "Cool picture!", likes: 3, date: new Date()},
      {account: "junsupark", id: replyId++, text: "Where did you take this picture? We need to hang out again soon!", likes: 10, date: new Date()},
      {account: "rihanna", id: replyId++, text: "Sick", likes: 45679, date: new Date()},
      {account: "drake", id: replyId++, text: "CLB", likes: 3, date: new Date()},
      {account: "notjunsupark", id: replyId++, text: "Cool picture!", likes: 3, date: new Date()},
      {account: "notjunsupark", id: replyId++, text: "Cool picture!", likes: 3, date: new Date()},
      {account: "notjunsupark", id: replyId++, text: "Cool picture!", likes: 3, date: new Date()},
    ],
    description: "I'm Bob Smith!",
    content: [
      { src: "/test7.jpg", type: "image" },
      { src: "/video3.mp4", type: "video" },
  ],
  },
  {
    account: "bobsmith",
    id: postId++,
    date: new Date(2023, 7, day++),
    likes: 129,
    replies: [
    ],
    description: "I'm Bob Smith!",
    content: [
      { src: "/video6.mp4", type: "video" },
      { src: "/test8.jpg", type: "image" },
  ],
  },
  {
    account: "notjunsupark",
    id: postId++,
    date: new Date(2023, 7, day++),
    likes: 3456,
    replies: [],
    description: "Third post!  I just came back from Lisbon, Portugal working on a cool project!\nWe were filming the #NewJeans music video for Super Shy! I had such a great time and the girls and the dancers were fantastic! They learned my choreography really well and executed my vision. I hope to do this again soon!\nPlease stream Super Shy Bunnies! #kpop",
    content: [
      { src: "/video4.mp4", type: "video" },
      { src: "/test8.jpg", type: "image" },
  ],
  }
];
