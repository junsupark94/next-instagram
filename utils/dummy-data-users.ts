import { Post } from "./dummy-data-posts";

export type User = {
  id: string;
  account: string;
  date: Date;
  name?: string;
  profilePicture: string;
  bio: string;
  location?: string;
  postCount: number;
  followerCount: number;
  followingCount: number;
  verified: boolean;
  pinned: number[];
};

let increment = 1;
function id() {
  return `d${increment++}`
}

export const USERS : User[] = [
  {
    account: 'junsupark',
    name: "J",
    id: id(),
    profilePicture: '/junsu park.jpeg',
    bio: `Full stack software engineer, passionate about building robust and performant web apps with beautiful aesthetics and intuitive user experience. Follow me on LinkedIn or DEV to see further updates to this Instagram clone project!\nhttps://www.linkedin.com/in/junsupark-swe/\nhttps://dev.to/junsupark94`,
    postCount: 100,
    followerCount: 2,
    followingCount: 2,
    verified: true,
    pinned: [10],
    date: new Date(2019, 5, 15),
    location: "San Francisco, CA"
  },
  {
    account: 'bobsmith',
    id: id(),
    profilePicture: '/bobsmith.jpg',
    bio: `it's bob smith`,
    postCount: 2,
    followerCount: 1,
    followingCount: 8241231,
    verified: false,
    pinned: [],
    date: new Date(2023, 3, 18)
  },
  {
    account: 'notjunsupark',
    id: id(),
    profilePicture: '/notjunsupark.jpg',
    bio: `dummy user`,
    postCount: 2,
    followerCount: 9992312,
    followingCount: 2,
    verified: false,
    pinned: [],
    date: new Date(2020, 1, 1),
  },
]