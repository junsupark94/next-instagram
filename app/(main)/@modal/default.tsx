import Link from "next/link";

export default function Default() {
  return (
    <div>
      <div>@Modal Default</div>
      <div>
        <Link href="/p">To P</Link>
      </div>
      <div>
        <Link href="/p/2">To P 2</Link>
      </div>
    </div>
  );
}
