import { Post } from "./dummy-data-posts";

export type User = {
  id: string;
  account: string;
  date: Date;
  name?: string;
  profilePicture: string;
  bio: string;
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
    profilePicture: '/profile1.jpeg',
    bio: `J
    San Francisco
    🇰🇷🇺🇸🏳️‍🌈
    6’0, 1994`,
    postCount: 5,
    followerCount: 2,
    followingCount: 2,
    verified: true,
    pinned: [5],
    date: new Date(2019, 5, 15)
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
    profilePicture: '/taylorswift.jpeg',
    bio: `cat lady`,
    postCount: 2,
    followerCount: 9992312,
    followingCount: 2,
    verified: false,
    pinned: [],
    date: new Date(2020, 1, 1),
  },
]