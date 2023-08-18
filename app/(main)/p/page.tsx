import Link from "next/link";

export default function Page() {
  return <div>
    <div>p page</div>
    <div><Link href="/p">To P</Link></div>
    <div><Link href="/p/1">To ID 1</Link></div>
  </div>
}