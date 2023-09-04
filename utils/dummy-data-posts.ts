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
  location?: string;
  edited?: boolean;
};

function getRandomInt(min: number = 0, max: number = 2000000) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}


let postId = 1;
let replyId = 1;

let postNumber = 1;
let videoNumber = 1;

export function getReplyId() {
  return replyId++;
}

let day = 1;

export const DUMMY_DATA: Post[] = [
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 1, 1),
    likes: 123,
    replies: [],
    description: `Welcome to my Instagram clone project! I challenged my front end skills by trying to replicate Instagram's UI as much as possible.`,
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
    description: `Not all the features are completed yet. Some buttons are crossed out and anything with a pointer cursor is not interactive. Please do revisit in the future when I turn this frontend project into a full stack one. You can follow my updates on my LinkedIn or my DEV blog.`,
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
    description: `For this project, I focused on modal routing, virtual list, dark mode, carousel, custom video player, autoplay behavior, post description truncation, text parsing, and optimizations.`,
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
    description: `For the modal routing, try clicking on “View all comments”. A modal will pop up and the url will change. When you refresh or copy paste the url, it’ll take you to the photo page. This was implemented with NextJS parallel routing and route interception. You can close the modal by clicking outside of it, clicking the X in the top right corner, or going back in browser history. This is identical Instagram’s modal behavior.`,
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
    description: `The virtual list was implemented with a simple useStates on the feed indexes. When you scroll past a certain point, it will update the indexes. Instagram and Twitter uses absolute positioning with transform and padding for their virtual list, which I could not really understand but managed to replicate identically. My virtual list works for the home page and user page. Click on my profile name or icon to check out the user page.`,
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
    description: `Dark mode can be toggled in the menu options in the lower left. Try it out for yourself. Dark mode was implemented with Tailwind. Also, animating the menu transitions and the toggle switch took a lot of work. I had to use the Animation tab in Google Chrome to observe how Instagram implemented theirs.`,
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
    description: `The carousel was a challenge to figure out. Images and videos layout behaviors are hard to tame. The index indicator and scroll buttons required lot of trial-and-error and reading MDN documentations about scrolling.`,
    content: [
      {src: `/posts/post${postNumber++}.jpg`, type: "image"},
      {src: `/posts/post${postNumber++}.jpg`, type: "image"},
      {src: `/posts/video${videoNumber++}.mp4`, type: "video"},
      {src: `/posts/post${postNumber++}.jpg`, type: "image"},
      {src: `/posts/post${postNumber++}.jpg`, type: "image"},
      {src: `/posts/video${videoNumber++}.mp4`, type: "video"},
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 1, 8),
    likes: 9123,
    replies: [],
    description: `Creating a custom video player was really fun. Shoutout to Web Dev Simplified for his tutorial. What was really difficult was trying to understand how Instagram’s autoplay behavior worked for videos. I replicated their behavior closely as possible while also making sure videos hidden in carousel don’t autoplay and do autoplay when it comes out into view.`,
    content: [
      {src: `/posts/video${videoNumber++}.mp4`, type: "video"},
      {src: `/posts/post${postNumber++}.jpg`, type: "image"}
    ]
  },
  {
    account: "junsupark",
    id: postId++,
    date: new Date(2022, 1, 9),
    likes: 84232,
    replies: [],
    description: `Post description preserves whitespace and gets truncated at the first newline or 100 characters, whichever comes first.\n Descriptions and comments converts hashtags and @ to proper links. Test this out by adding a comment to any of the posts! #webdev #fullstack #softwareengineer`,
    content: [
      {src: `/posts/video${videoNumber++}.mp4`, type: "video"},
      {src: `/posts/post${postNumber++}.jpg`, type: "image"},
      {src: `/posts/video${videoNumber++}.mp4`, type: "video"},
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
      {src: `/posts/post${postNumber++}.jpg`, type: "image"},
      {src: `/posts/video${videoNumber++}.mp4`, type: "video"},
      {src: `/posts/video${videoNumber++}.mp4`, type: "video"},
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
      {src: `/posts/video${videoNumber++}.mp4`, type: "video"},
      {src: `/posts/video${videoNumber++}.mp4`, type: "video"},
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
