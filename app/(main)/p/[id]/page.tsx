import Link from "next/link";

export default async function Page({ params }) {
  return (
    <div>
      {" "}
      <div>
        p {`[id]`} {params.id} Page
      </div>
      <div>
        <Link href="/p">To P</Link>
      </div>
      <div>
        <Link href="/p/3">To P 3</Link>
      </div>
    </div>
  );
}
