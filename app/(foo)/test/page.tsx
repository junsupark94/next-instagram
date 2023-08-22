'use client'
import Feed from "@/components/Feed/Feed";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";

export default function Page() {
  const queryParams = useSearchParams();
  const params = useParams();
  console.log('params', params)
  // console.log('params', params);
  console.log('queryParams', queryParams.getAll('img'));
  // console.log('router', router);

  // return <Feed />
  return (
    <div className="border-2 w-[400px] h-[200px] flexz">
      {/* <Image src="/test1.jpg" alt="image" width={400} height={400} className="w-[600px] h-[400px] object-contain border border-blue-500"/> */}
      <Link href="/test/?img=1">Test</Link>
      <Link href="/test?img=2">Test 2</Link>
    </div>
  )
}
