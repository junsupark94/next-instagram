import Feed from "@/components/Feed/Feed";
import Image from "next/image";

export default async function Page() {
  // return <Feed />
  return (
    <div className="border-2 w-[400px] h-[200px] flexz">
      {/* <Image src="/test1.jpg" alt="image" width={400} height={400} className="w-[600px] h-[400px] object-contain border border-blue-500"/> */}
      <video src="/video1.mp4" muted className="w-[700px]"/>
    </div>
  )
}
