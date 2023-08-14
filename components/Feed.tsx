import React from "react";
import { DUMMY_DATA } from "@/util/dummy-data";
import FeedItem from "./FeedItem";

type FeedProps = {};

const Feed: React.FC<FeedProps> = () => {
  return (
    <main className="bg-blue-200 h-screen">
      <section>
        {DUMMY_DATA.map((item) => <FeedItem key={item.id} item={item} />)}
      </section>
    </main>
  );
};
export default Feed;
