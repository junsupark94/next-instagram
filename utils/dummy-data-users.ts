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
    bio: `Full stack software engineer, passionate about building robust and performant web apps with beautiful aesthetics and intuitive user experience. Follow me on LinkedIn or DEV to see further updates to this Instagram clone project!`,
    postCount: 5,
    followerCount: 2,
    followingCount: 2,
    verified: true,
    pinned: [5],
    date: new Date(2019, 5, 15),
    location: "San Francisco, CA"
  },
  {
    account: 'bobsmith',
    id: id(),
    profilePicture: '/profile2.jpeg',
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
    profilePicture: '/taylorswift.jpg',
    bio: `cat lady`,
    postCount: 2,
    followerCount: 9992312,
    followingCount: 2,
    verified: false,
    pinned: [],
    date: new Date(2020, 1, 1),
  },
]