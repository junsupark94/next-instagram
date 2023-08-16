'use client'
import { DUMMY_DATA } from "@/util/dummy-data";
import FeedItem from "./FeedItem";

type FeedProps = {};

const Feed: React.FC<FeedProps> = () => {
  return (
    <main>
      <section className="flex flex-col gap-2 text-[14px]">
        {DUMMY_DATA.map((item) => <FeedItem key={item.id} item={item} />)}
      </section>
    </main>
  );
};
export default Feed;