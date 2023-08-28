export type Reply = {
  account: string;
  id: number;
  text: string;
  likes: number;
  thread: ThreadItem[];
  date: Date;
};

export type ThreadItem = {
  account: string;
  id: number;
  text: string;
  likes: number;
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
  pinned?: boolean;
};

function getRandomInt(min: number = 0, max: number = 2000000) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}


let postId = 1;
let replyId = 1;

let postNumber = 1;

export function getReplyId() {
  return replyId++;
}

let day = 1;

export const DUMMY_DATA: Post[] = [
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2023, 4, day++),
    likes: 10,
    replies: [
      {
        account: "bobsmith",
        id: replyId++,
        text: "Welcome to Instagram!",
        likes: 0,
        date: new Date(2023, 6, 23, 6, 0, 20),
        thread: [
          {
            account: "junsupark",
            id: replyId++,
            text: "Thanks Bob!",
            likes: 3,
            date: new Date(2023, 7, 23, 6, 15),
          },
        ],
      },
      {
        account: "champagepapi",
        id: replyId++,
        text: "Dope @badgalriri #sexybitch",
        likes: 882341,
        date: new Date(2023, 7, 15),
        thread: [],
      },
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
    likes: 55,
    replies: [
      {
        account: "bobsmith",
        id: replyId++,
        text: "Great post",
        likes: 2,
        date: new Date(),
        thread: [
          {
            account: "notjunsupark",
            id: replyId++,
            text: "Love it!",
            likes: 3,
            date: new Date(),
          },
        ],
      },
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
    replies: [],
    description: "Third post!",
    content: [{ src: "/test7.jpg", type: "image" }],
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2023, 4, day++),
    likes: 10,
    replies: [],
    description: "Fourth post!",
    content: [{ src: "/video5.mp4", type: "video" }],
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2023, 4, day++),
    likes: 10,
    replies: [],
    description: "Fifth post!",
    content: [{ src: "/video7.mp4", type: "video" }],
  },
  {
    account: "bobsmith",
    id: postId++,
    date: new Date(2023, 7, day++),
    likes: 129,
    replies: [
      {
        account: "notjunsupark",
        id: replyId++,
        text: "Cool picture!",
        likes: 3,
        date: new Date(),
        thread: [],
      },
      {
        account: "junsupark",
        id: replyId++,
        text: "Where did you take this picture? We need to hang out again soon!",
        likes: 10,
        date: new Date(),
        thread: [],
      },
      {
        account: "rihanna",
        id: replyId++,
        text: "Sick",
        likes: 45679,
        date: new Date(),
        thread: [],
      },
      {
        account: "drake",
        id: replyId++,
        text: "CLB",
        likes: 3,
        date: new Date(),
        thread: [],
      },
      {
        account: "notjunsupark",
        id: replyId++,
        text: "Cool picture!",
        likes: 3,
        date: new Date(),
        thread: [],
      },
      {
        account: "notjunsupark",
        id: replyId++,
        text: "Cool picture!",
        likes: 3,
        date: new Date(),
        thread: [],
      },
      {
        account: "notjunsupark",
        id: replyId++,
        text: "Cool picture!",
        likes: 3,
        date: new Date(),
        thread: [],
      },
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
    replies: [],
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
    description:
      "Third post!  I just came back from Lisbon, Portugal working on a cool project!\nWe were filming the #NewJeans music video for Super Shy! I had such a great time and the girls and the dancers were fantastic! They learned my choreography really well and executed my vision. I hope to do this again soon!\nPlease stream Super Shy Bunnies! #kpop",
    content: [
      { src: "/video4.mp4", type: "video" },
      { src: "/test8.jpg", type: "image" },
    ],
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2023, 7, day++),
    likes: 129,
    replies: [],
    description: "it's Charli baby",
    content: [
      { src: "/video6.mp4", type: "video" },
      { src: "/test8.jpg", type: "image" },
    ],
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2023, 7, day++),
    likes: 129,
    replies: [],
    description: "more dummy posts",
    content: [
      { src: "/test9.jpg", type: "image" },
      { src: "/video5.mp4", type: "video" },
    ],
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2023, 7, day++),
    likes: 129,
    replies: [],
    description: "it's ethel cain baby",
    content: [
      { src: "/test10.jpg", type: "image" },
      { src: "/video7.mp4", type: "video" },
    ],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 1, 1),
    likes: 123,
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 1, 2),
    likes: 345,
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 1, 3),
    likes: 99,
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 1, 4),
    likes: 1032,
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 1, 5),
    likes: 1032,
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 1, 6),
    likes: 12,
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 1, 7),
    likes: 12,
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 1, 8),
    likes: 9123,
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 1, 9),
    likes: 84232,
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 1, 10),
    likes: 1300230,
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 1, 11),
    likes: 1300230,
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 1, 12),
    likes: 57,
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 1, 13),
    likes: 57,
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 1, 14),
    likes: 537,
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 1, 15),
    likes: 198,
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 1, 16),
    likes: 198,
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 1, 17),
    likes: 32,
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 1, 18),
    likes: 1,
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 1, 19),
    likes: 38,
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 1, 20),
    likes: 38,
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 1, 21),
    likes: 55,
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 1, 22),
    likes: 988,
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 1, 23),
    likes: 230,
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 1, 24),
    likes: 441,
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 1, 25),
    likes: 33,
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 1, 26),
    likes: 7421,
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 1, 27),
    likes: 7421,
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 1, 28),
    likes: 23,
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 1, 29),
    likes: 500,
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 1, 30),
    likes: 321,
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 2, 1),
    likes: 3,
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 2, 2),
    likes: 2,
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 2, 3),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 2, 4),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 2, 5),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 2, 6),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 2, 7),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 2, 8),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 2, 9),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 2, 10),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 2, 11),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 2, 12),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 2, 13),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 2, 14),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 2, 15),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 2, 16),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 2, 17),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 2, 18),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 2, 19),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 2, 20),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 2, 21),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 2, 22),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 2, 23),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 2, 24),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 2, 25),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 2, 26),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 2, 27),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 2, 28),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 3, 1),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 3, 2),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 3, 3),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 3, 3),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 3, 4),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 3, 5),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 3, 6),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 3, 7),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 3, 8),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 3, 9),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 3, 10),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 3, 11),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 3, 12),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 3, 13),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 3, 14),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 3, 15),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 3, 16),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 3, 17),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 3, 18),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 3, 19),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 3, 20),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 3, 21),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 3, 22),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 3, 23),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 3, 24),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 3, 25),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 3, 26),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 3, 27),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 3, 28),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 3, 29),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 3, 30),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 4, 1),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 4, 2),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 4, 3),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 4, 4),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 4, 5),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 4, 6),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 4, 7),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 4, 8),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 4, 9),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 4, 10),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 4, 11),
    likes: getRandomInt(),
    replies: [],
    description: `post${postNumber}.jpg`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },

];
